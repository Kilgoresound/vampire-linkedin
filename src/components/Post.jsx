import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import InsertCommentSharpIcon from '@mui/icons-material/InsertCommentSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';

export default function Post({ name, description, message, photoURL }) {
    return (
        <div className="post bg-zinc-900 p-5 border border-zinc-700 rounded-md">
            <div className="post-header flex mb-3">
                <Avatar src={photoURL} />
                <div className="post-info ml-3">
                    <h2 className='font-bold text-sm text-zinc-200'>{name}</h2>
                    <p className='text-xs text-zinc-400'>{description}</p>
                </div>
            </div>

            <div className="post-body">
                <p className='text-sm text-zinc-200 line-clamp-2'>{message}</p>
            </div>
            <div className="post-buttons flex ">
                <InputOptions Icon={ThumbUpSharpIcon} title="Like" color="#881337" />
                <InputOptions Icon={InsertCommentSharpIcon} title="Comment" color="#881337" />
                <InputOptions Icon={ShareSharpIcon} title="Share" color="#881337" />
                <InputOptions Icon={SendSharpIcon} title="Send" color="#881337" />
            </div>
        </div>
    )
}