import React from 'react'
// import HeaderOption from './HeaderOption'
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
function HeaderOptions() {
    // import React from 'react'

// function HeaderOption({Icon,title,selected}) {
//     return (
//         <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${selected && "text-blue-500 border-blue-500"}`}>
//             <Icon className="h-4" />
//             <p className="hidden sm:inline-flex">{title}</p>
//         </div>
//     )
// }

// export default HeaderOption

    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b ">
            {/* left */}
            <div className="flex space-x-6 items-center">
                <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer text-blue-500 border-blue-500`}>
                    <SearchIcon className="h-4" />
                    <p className="hidden sm:inline-flex">All</p>
                </div>
                <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointe`}>
                    <PhotographIcon className="h-4" />
                    <p className="hidden sm:inline-flex">Images</p>
                </div>
                <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointe`}>
                    <PlayIcon className="h-4" />
                    <p className="hidden sm:inline-flex">Videos</p>
                </div>
                <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointe`}>
                    <NewspaperIcon className="h-4" />
                    <p className="hidden sm:inline-flex">News</p>
                </div>
                <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointe`}>
                    <MapIcon className="h-4" />
                    <p className="hidden sm:inline-flex">Map</p>
                </div>
                <div className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointe`}>
                    <DotsVerticalIcon className="h-4" />
                    <p className="hidden sm:inline-flex">More</p>
                </div>

                {/* <HeaderOption Icon={SearchIcon}
                    title="All"
                    selected={true} />
                <HeaderOption Icon={PhotographIcon}
                    title="Images"
                    selected={false}
                />
                <HeaderOption Icon={PlayIcon}
                    title="Videos"
                    selected={false}
                />
                <HeaderOption Icon={NewspaperIcon}
                    title="News"
                    selected={false}
                />
                <HeaderOption Icon={MapIcon}
                    title="Map"
                    selected={false}
                />
                <HeaderOption Icon={DotsVerticalIcon}
                    title="More"
                    selected={false}
                /> */}
            </div>

            {/* right */}
            <div className="flex space-x-4 pb-3">
                <p className="link " >Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
