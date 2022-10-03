import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';

export default function App() {
  return (
    <div className="bg-black h-screen">
      <Header />

      {/* {App Body} */}
      <div className="app-body flex justify-around">
        <Sidebar />
        {/* {Feed} */}
        <Feed />
        {/* {Widgets} */}
      </div>
    </div>
  );
}
