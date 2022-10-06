import CreateSharpIcon from '@mui/icons-material/CreateSharp';

import InputOptions from './InputOptions';
import ImageSharpIcon from '@mui/icons-material/ImageSharp';
import MovieCreationSharpIcon from '@mui/icons-material/MovieCreationSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';
import Post from './Post';
import { useState } from 'react';
import { db } from '../firebase';
import { useEffect } from 'react';
import { collection, doc, setDoc, onSnapshot, updateDoc, serverTimestamp, query, orderBy } from "firebase/firestore";

// import { firebase } from 'firebase';


export default function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const post = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                console.log(snapshot.docs);
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )))
            });

    }, []);

    const sendPost = (e) => {
        let newPostRef = doc(collection(db, "posts"));
        e.preventDefault();
        setDoc(newPostRef,
            {
                name: 'Valek Aleistayne',
                description: 'Coachferatu',
                message: input,
                photoURL: 'https://miro.medium.com/max/1400/1*almKrH_2LcQhOHRFYV-AMg.jpeg',
                timestamp: serverTimestamp(),
            }
        );
        setInput("");

    }

    return (
        <div className="feed w-3/5 h-full ">
            <div className="feed-input-container bg-zinc-900 p-5 border border-zinc-700 rounded-md">
                <div className="feed-input">
                    <form action="">
                        <div className="flex rounded-md">
                            <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <CreateSharpIcon className="h-5 w-5 text-zinc-400" aria-hidden="true" />
                                </div>
                                <input
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    type="text"
                                    className="block w-full bg-zinc-50 rounded-none rounded-l-2xl border-zinc-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
                                    placeholder="Start a post"
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={sendPost}
                                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-2xl border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
                            >
                                {/* <BarsArrowUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                <span>Submit</span>
                            </button>
                        </div>


                    </form>
                </div>
                <div className="feed-input-options flex justify-evenly">
                    <InputOptions Icon={ImageSharpIcon} title="Photo" color="#2563eb" />
                    <InputOptions Icon={MovieCreationSharpIcon} title="Video" color="#059669" />
                    <InputOptions Icon={CalendarMonthSharpIcon} title="Event" color="#ea580c" />
                    <InputOptions Icon={NewspaperSharpIcon} title="Write Article" color="#c026d3" />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message, photoURL } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoURL={photoURL}

                />
            ))}
            {/* <Post name="Valek Aleistayne" description="Coach Feratu" message="Your Precious Blood! Let us chat together a moment, my friend! There are still several hours until dawn, and I have the whole day to sleep. There is no life in this body. I am nothing, lifeless, soulless, hated and feared. I am dead to all the world - hear me! I am the monster that breathing men would kill." photoURL="https://miro.medium.com/max/1400/1*almKrH_2LcQhOHRFYV-AMg.jpeg" /> */}
        </div>
    )
}