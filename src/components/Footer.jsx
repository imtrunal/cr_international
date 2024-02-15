import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className='bg-[#45270f] text-white flex flex-col items-center justify-center md:gap-5 gap-7 py-10 '>
            <div className="list flex md:flex-row flex-col md:gap-4 gap-2 text-base font-semibold flex-wrap items-center justify-center">
                {/*<a href="" className='text-white'>Products</a>*/}
                <Link to={"/catalogue"} className='text-white'>Catalogue</Link>
                <Link to={"/about"} className='text-white'>About Us</Link>
                <Link to={"/contact"} className='text-white'>Contact Us</Link>
            </div>
            <div className="copyrights">
                <p className="text-xl text-center font-bold">© 2024 CR International. All Rights Reserved.</p>
            </div>
{/*             <div className="devlopment">
                <p className="text-xl font-medium">Developed By</p>
            </div> */}
        </div>
    )
}

export default Footer
