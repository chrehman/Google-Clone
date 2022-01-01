import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';


function Header() {
    const router = useRouter();
    const [text, setText] = useState(router.query.term || "");
    const searchRef = useRef(router.query.term)
    const search = (e) => {
        e.preventDefault();

        const term = text===router.query.term?null:text;
        console.log("Hurray")
        if (!term) return;
        
        router.push(`/search?term=${term}&start=0`)
    }
    return (
        <header className="sticky top-0 bg-white ">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    width={120}
                    height={40}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                    alt="Google"
                />
                <form className="flex flex-grow border
            px-6 py-3 ml-10 mr-5 max-w-3xl items-center
            border-gray-200 rounded-full shadow-lg sm:flex-grow-0 w-1/2">
                    <input
                        ref={searchRef}
                        value={text}
                        type="text"
                        placeholder="Search"
                        onChange={(e)=> setText(e.target.value)}
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon className=" h-7 cursor-pointer text-gray-500
                transition duration-150  hover:scale-125 sm:mr-3"
                        onClick={() => searchRef.current.value = ''}
                    />
                    <MicrophoneIcon className=" h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon
                        className="h-6 hidden text-blue-500 sm:inline-flex"
                    />
                    <button type="submit" hidden onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar 
                className="ml-auto"
                url="https://firebasestorage.googleapis.com/v0/b/safe-citizen-life.appspot.com/o/55301984-0fc1-41da-9272-43ea841da78e1630749987295.jpg?alt=media&token=b5bf50a2-91e3-48aa-b7db-e2923f2dfd84"/>
            </div>
            <HeaderOptions/>

        </header>
    )
}

export default Header
