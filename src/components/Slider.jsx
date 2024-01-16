import React, { useEffect, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slide = ({ img }) => (
  <div>
    <div className="">
      <img src={img} alt="" className='aspect-video' />
    </div>
    <div className="p-5">
      <h1 className='font-bold text-neutral-900'>Lorem, ipsum dolor.</h1>
      <p className='text-base text-neutral-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas praesentium, amet laborum veritatis necessitatibus voluptas quos possimus hic. Numquam est nihil quam nostrum cumque soluta.</p>
    </div>
  </div>
)

const categoryObject = [
  {
    title: 'PaperBags',
    img: [
      '/assets/PaperBags/1.png',
      '/assets/PaperBags/2.png',
      '/assets/PaperBags/3.png',
      '/assets/PaperBags/4.png',
    ]
  },
  {
    title: 'CoffeeCups',
    img: [
      '/assets/CoffeeCups/1.png',
      '/assets/CoffeeCups/2.png',
      '/assets/CoffeeCups/3.png',
      '/assets/CoffeeCups/4.png',
      '/assets/CoffeeCups/5.png',
      '/assets/CoffeeCups/6.png',
      '/assets/CoffeeCups/7.png',
      '/assets/CoffeeCups/8.png',
      '/assets/CoffeeCups/9.png',
    ]
  },
  {
    title: 'FoodContainer',
    img: [
      '/assets/FoodContainer/1.png',
      '/assets/FoodContainer/2.png',
      '/assets/FoodContainer/3.png',
      '/assets/FoodContainer/4.png',
      '/assets/FoodContainer/5.png',
      '/assets/FoodContainer/6.png',
      '/assets/FoodContainer/7.png',
      '/assets/FoodContainer/8.png',
    ]
  },
  {
    title: 'Cutlery',
    img: [
      '/assets/Cutlery/1.png',
      '/assets/Cutlery/2.png',
      '/assets/Cutlery/3.png',
      '/assets/Cutlery/2.png',
    ]
  },
  {
    title: 'Condments',
    img: [
      '/assets/Condments/1.png',
      '/assets/Condments/1.png',
      '/assets/Condments/1.png',
      '/assets/Condments/1.png',
    ]
  },
  {
    title: 'WrappingPaper',
    img: [
      '/assets/WrappingPaper/1.png',
      '/assets/WrappingPaper/2.png',
      '/assets/WrappingPaper/1.png',
      '/assets/WrappingPaper/2.png',
    ]
  },
  {
    title: 'All',
    img: [
      '/assets/PaperBags/2.png',
      '/assets/PaperBags/3.png',
      '/assets/CoffeeCups/4.png',
      '/assets/CoffeeCups/5.png',
      '/assets/CoffeeCups/6.png',
      '/assets/FoodContainer/3.png',
      '/assets/FoodContainer/4.png',
      '/assets/FoodContainer/5.png',
      '/assets/Cutlery/3.png',
      '/assets/Cutlery/2.png',
      '/assets/Condments/1.png',
      '/assets/WrappingPaper/1.png',
      '/assets/WrappingPaper/2.png',
    ]
  },
]

const Slider = ({ category }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const result = categoryObject.filter((item) => item.title === category)
    console.log(result[0].img);
    setData(result[0].img)
  }, [category])

  return (
    <React.Fragment>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide img={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  )
}

export default Slider