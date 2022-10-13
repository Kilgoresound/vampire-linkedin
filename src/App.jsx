import { useDispatch, useSelector } from 'react-redux'

import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Login from './components/Login.jsx'

import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { login, logout } from './features/userSlice.js';
// import { Widgets } from '@mui/icons-material';
import Widgets from './components/Widgets.jsx';

export default function App() {
  const currentUser = useSelector((state) => state.user.user)
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="bg-black h-full">
      {!currentUser ? ("") : (<Header />)}
      {!currentUser ? (<Login />) : (
        <div className="app-body flex mt-9 max-w-full mx-6 justify-evenly">
          <Sidebar />
          <Feed />
          <Widgets />
          {/* {Widgets} */}
        </div>
      )
      }
    </div>

  );
}
