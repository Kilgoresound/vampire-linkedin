import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HeaderOption from './HeaderOption.jsx';
import Logo from './logo.jsx';
import CastleSharpIcon from '@mui/icons-material/CastleSharp';
import NightsStaySharpIcon from '@mui/icons-material/NightsStaySharp';
import ShieldMoonSharpIcon from '@mui/icons-material/ShieldMoonSharp';
import LensBlurSharpIcon from '@mui/icons-material/LensBlurSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import BatLogo from './bat-logo.jsx';

export default function Header() {
    return (
        <div className="header flex justify-evenly bg-zinc-900 border-b border-zinc-700 w-full py-2 sticky top-0 z-50">
            <div className="header-left flex">
                <Logo />
                <div className="header-search p-3 flex items-center bg-zinc-100 shadow-sm rounded-sm h-10">
                    <SearchSharpIcon fontSize='medium' />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="border-hidden bg-transparent ml-2 h-6 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                    />
                </div>
            </div>

            <div className="header-right flex">
                <HeaderOption Icon={CastleSharpIcon} title="Home" />
                <HeaderOption Icon={NightsStaySharpIcon} title="My Network" />
                <HeaderOption Icon={ShieldMoonSharpIcon} title="Jobs" />
                <HeaderOption Icon={LensBlurSharpIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsNoneSharpIcon} title="Notifications" />
                <HeaderOption avatar="https://miro.medium.com/max/1400/1*almKrH_2LcQhOHRFYV-AMg.jpeg" />
            </div>
        </div>
    )
}