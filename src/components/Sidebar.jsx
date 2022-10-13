import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const user = useSelector((state) => state.user.user)
    console.log(user);
    const recentItem = (topic) => (
        <div className="sidebar-recent-item text-sm text-zinc-400 flex items-center pl-1 cursor-pointer hover:bg-rose-400 hover:text-zinc-800 hover:font-semibold hover:rounded-sm">
            <span className="sidebar-hash text-lg font-semibold">#</span>
            <p className='ml-1'>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar top-20 sticky rounded-md w-1/5 text-center h-fit">
            <div className="sidebar-top bg-zinc-900 flex flex-col items-center border border-zinc-700 border-b-0 rounded-t-md pb-2">
                <img src="src/assets/bg-castle-img.jpeg" alt="Background Image" className='object-cover h-20 rounded-md w-full -mb-8' />
                <Avatar sx={{ height: 80, width: 80 }} src={user.photoURL} className='sidebar-avatar mb-2 mt-3' />
                <h2 className="text-xl font-semibold text-zinc-300">{user.displayName}</h2>
                <h4 className="text-lg text-zinc-400">{user.email}</h4>
            </div>
            <div className="sidebar-stats bg-zinc-900 p-3 mb-3 border border-zinc-700 rounded-b-md">
                <div className="sidebar-stat mt-2 flex justify-between">
                    <p className="text-sm text-zinc-400">Who's viewed your profile</p>
                    <p className="sidebar-stat-number text-sm text-rose-400">2,566</p>
                </div>
                <div className="sidebar-stat mt-2 flex justify-between">
                    <p className="text-sm text-zinc-400">Connections</p>
                    <p className="sidebar-stat-number text-sm text-rose-400">10,387</p>
                </div>
            </div>
            <div className="sidebar-bottom bg-zinc-900 text-left p-3 border border-zinc-700 rounded-md mt-3">
                <p className='text-sm text-zinc-400 font-semibold mb-2'>Recent</p>
                {recentItem('darkbiddingonebay')}
                {recentItem('werewolvesofinstagram')}
                {recentItem('vladsdishes')}
                {recentItem('catvids')}
                {recentItem('haxanforyou')}
            </div>
        </div>
    )
}