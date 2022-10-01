import { Avatar } from '@mui/material';

export default function Sidebar() {
    return (
        <div className="sidebar top-20 sticky rounded-md w-1/5 text-center h-fit">
            <div className="sidebar-top bg-zinc-900 flex flex-col items-center border border-zinc-700 border-b-0 rounded-t-md pb-2">
                <img src="src/assets/bg-castle-img.jpeg" alt="Background Image" className='object-cover h-20 rounded-md w-full -mb-8' />
                <Avatar className='sidebar-avatar mb-2 mt-3' />
                <h2 className="text-xl font-semibold text-zinc-300">Valek Aleistayne</h2>
                <h4 className="text-lg text-zinc-400">coachferatu@vampz.io</h4>
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
            <div className="sidebar-bottom">
                <p className='text-sm text-zinc-400 font-semibold'>Recent</p>
            </div>
        </div>
    )
}