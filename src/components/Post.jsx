import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import InsertCommentSharpIcon from '@mui/icons-material/InsertCommentSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { forwardRef } from 'react';

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
    return (
        <div ref={ref} className="post bg-zinc-900 p-5 border mt-3 border-zinc-700 rounded-md">
            <div className="post-header flex mb-3">
                <Avatar src={photoURL}>{name[0]}</Avatar>
                <div className="post-info ml-3">
                    <h2 className='font-bold text-sm text-zinc-200'>{name}</h2>
                    <p className='text-xs text-zinc-400'>{description}</p>
                </div>
            </div>

            <div className="post-body">
                <p className='text-sm text-zinc-200 line-clamp-3'>{message}</p>
            </div>
            <div className="post-buttons flex justify-evenly">
                <InputOptions Icon={ThumbUpSharpIcon} title="Like" color="#881337" />
                <InputOptions Icon={InsertCommentSharpIcon} title="Comment" color="#881337" />
                <InputOptions Icon={ShareSharpIcon} title="Share" color="#881337" />
                <InputOptions Icon={SendSharpIcon} title="Send" color="#881337" />
            </div>
        </div>
    )
})

export default Post;