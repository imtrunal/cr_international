import '../index.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

/*
Paper bags
Coffee cups
Food containers
Cutlery
Condments
Wrapping paper
Food Container
Cutley
*/

const categoryObject = [
  {
    title: 'Paper bags',
    img: '/assets/product1.png',
    color: '#ad2828',
    seconday: '#F6a395'
  },
  {
    title: 'Coffee cups',
    img: '/assets/product2.png',
    color: '#a3c9f8',
    seconday: '#213A5C'
  },
  {
    title: 'Food containers',
    img: '/assets/product3.png',
    color: '#a3c9f8',
    seconday: '#213A5C'
  },
  {
    title: 'Cutlery',
    img: '/assets/product4.png',
    color: '#ad2828',
    seconday: '#F6a395'
  },
  {
    title: 'Condments',
    img: '/assets/product5.png',
    color: '#ad2828',
    seconday: '#F6a395'
  },
  {
    title: 'Wrapping paper',
    img: '/assets/product6.png',
    color: '#a3c9f8',
    seconday: '#213A5C'
  },
]

const Home = () => {
  return (
    <main >
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

      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 p-5'>
        {categoryObject.map((item, index) => (
          <Link to={`/products`} key={index}>
            <div className='w-full h-60 rounded-lg overflow-hidden' key={index}>
              <div className="w-full h-full overflow-hidden flex items-start justify-start relative"
                style={{ background: `${item.seconday}` }}
              >
                <img src={item.img} alt="" className='w-full h-full object-contain absolute top-0 -left-12' />
                <div className="mr-10 w-1/2 h-full flex flex-col justify-center text-right items-end gap-5 absolute right-0">
                  <p className={`lg:text-5xl md:text-3xl text-2xl font-bold`}
                    style={{ color: item.color }}
                  >{item.title}</p>
                  <div className="border w-10 h-10 flex items-center justify-center rounded-full p-1 bg-white">
                    <Icon icon='fluent:arrow-right-12-filled' className='lg:text-2xl md:text-xl text-lg' color={item.color} />
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


// linear-gradient(45deg, rgb(185 185 185), rgba(246, 163, 149, 0.5))