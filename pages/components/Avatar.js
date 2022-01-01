import React from 'react'

function Avatar({ url,className }) {
    return (

        <img
            loading="lazy"
            src={url}
            alt="profile pic"
            className={`w-10 h-10 
            cursor-pointer
            rounded-full mr-4
            transition duration-150
            transform hover:-translate-y-1 hover:scale-110
            ${className}
            `} />

    )
}

export default Avatar
