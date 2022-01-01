import React from 'react'
// import {GlobalIcon} from '@heroicons/react'
function Footer() {

    
    return (
        <footer className="grid w-full divide-gray-300 divide-y-[1px] bg-gray-100 text-sm text-gray-500">
            {/* <GlobalIcon/> */}


            <div className="px-8 py-4 ">
                <p>Pakistan</p>
            </div>
            <div className="grid grid-col-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
                <div className="flex items-center justify-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
                    <p>Carbon neutral since 2022?</p>
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap
                md:justify-self-start
                ">
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How search works</p>
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap
                md:justify-self-end
                ">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
