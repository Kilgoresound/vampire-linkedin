import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx';

export default function App() {
  return (
    <div className="bg-black h-screen">
      <Header />

      {/* {App Body} */}
      <div className="app-body flex flex-col items-center">
        <Sidebar />
        {/* {Feed} */}
        {/* {Widgets} */}
      </div>
    </div>
  );
}
