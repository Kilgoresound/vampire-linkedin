import { Avatar } from '@mui/material';

export default function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="header-option flex flex-col items-center mr-5 text-zinc-100 cursor-pointer hover:text-rose-600">
            {Icon && <Icon className="header-option-icon" />}
            {avatar && <Avatar className="header-option-icon object-contain" src={avatar} />}
            <h3 className="header-option-title text-sm">{title}</h3>
        </div>
    )

}