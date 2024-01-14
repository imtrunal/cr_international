import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#1B4B66] text-white flex flex-col items-center justify-center gap-5 py-10 '>
            <div className="list flex gap-4 text-base font-semibold flex-wrap">
                <a href="" className='text-white'>Academy</a>
                <a href="" className='text-white'>Books</a>
                <a href="" className='text-white'>Podcast</a>
                <a href="" className='text-white'>Reels</a>
                <a href="" className='text-white'>Videos</a>
                <a href="" className='text-white'>Contact Me</a>
                <a href="" className='text-white'>About Me</a>
            </div>
            <div className="copyrights">
                <p className="text-xl font-bold">© 2024 CR Creation. All Rights Reserved.</p>
            </div>
            <div className="devlopment">
                <p className="text-xl font-medium">Developed By Karma Infotech</p>
            </div>
        </div>
    )
}

export default Footer