import React from 'react'
import '../index.css'
import { Icon } from '@iconify/react'
import { Image } from '@nextui-org/react'
import { Link } from 'react-router-dom'

const bannersObj = [
  {
    img: '/assets/banner1.png',
    title: 'Facepacks & Peels',
    color: '#1B4B66'
  },
  {
    img: '/assets/banner2.png',
    title: 'Skincare Essentials',
    color: '#A53F64'
  },
  {
    img: '/assets/banner2.png',
    title: 'Skincare Essentials',
    color: '#A53F64'
  },
  {
    img: '/assets/banner1.png',
    title: 'Facepacks & Peels',
    color: '#1B4B66'
  },
  {
    img: '/assets/banner1.png',
    title: 'Skincare Essentials',
    color: '#A53F64'
  },
  {
    img: '/assets/banner2.png',
    title: 'Skincare Essentials',
    color: '#A53F64'
  },
]

const Home = () => {
  return (
    <main >
      <div className="bg-neutral-200 p-4 text-center md:otext-base text-sm">
        <p>We are currently experiencing local customs clearance delays. For the latest updates, please check your order status here</p>
      </div>
      <div className="p-5 h-[80vh]">
        <div className="relative w-full h-full min-h-[80%] rounded-3xl overflow-hidden flex items-center">
          <img src="/assets/landingPage.png" alt="" className='w-full h-full object-cover absolute top-0 left-0 object-left' />

          <div className="
          absolute right-0 z-10 h-5/6 p-10 bg-[#DEDEDEB3] backdrop-blur-[5] flex flex-col justify-center
          xl:w-[60%] md:w-[80%] md:m-0 m-5 xl:gap-8 lg:gap-7 md:gap-5 gap-3 rounded-3xl md:rounded-r-none rounded-r-3xl
          ">
            <h1 className='lg:text-5xl md:text-4xl text-3xl font-bold text-[#1B4B66]'>Carry your Funk</h1>
            <p className='lg:text-4xl md:text-2xl text-xl font-medium text-[#1B4B66]'>Trendy handbags collection for your party animal</p>
            <button className='lg:text-2xl md:text-xl md:py-2 md:px-5 text-base py-2 px-3 w-fit rounded-lg text-white bg-[#1B4B66] flex gap-5 items-center'>
              See More <Icon icon='formkit:arrowright' />
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 p-5'>
        {bannersObj.map((item, index) => (
          <Link to={`/products`}>
            <div className='w-full h-60 rounded-lg overflow-hidden' key={index}>
              <div className="w-full h-full overflow-hidden flex items-start justify-start relative" style={{ background: '#0000' }}>
                <img src={item.img} alt="" className='w-full h-full object-cover absolute top-0' />
                <div className="mr-10 w-1/2 h-full flex flex-col justify-center text-right items-end gap-5 absolute right-0">
                  <p className={`text-5xl font-bold`} style={{ color: item.color }}>{item.title}</p>
                  <div className="border w-10 h-10 flex items-center justify-center rounded-full p-1 bg-white">
                    <Icon icon='fluent:arrow-right-12-filled' fontSize={22} color={item.color} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  )
}

export default Home