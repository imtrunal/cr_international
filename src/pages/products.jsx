import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ITEMS = [
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 145
    },
    {
        img: `/assets/image2.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 146
    },
    {
        img: `/assets/image3.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 147
    },
    {
        img: `/assets/image4.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 149
    },
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 150
    },
    {
        img: `/assets/image2.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 1455
    },
    {
        img: `/assets/image3.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 1451
    },
    {
        img: `/assets/image4.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 1452
    },
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        Ratings: 43,
        Price: `39.49`,
        PrevPrice: `78.66`,
        Offer: `50% OFF`,
        id: 1454
    },
]

const Products = () => {
    let { category } = useParams()

    if(category == null){
        category = "Products"
    }

    const [view, setView] = useState('grid')

    return (
        <main className='py-5 px-10'>
            <div className="">
                <img src="/assets/hero.png" alt="" />
            </div>
            <div className="breadcrumbs pt-16 pb-5">
                <Breadcrumbs color='foreground'>
                    <BreadcrumbItem href='/'>Home</BreadcrumbItem>
                    <BreadcrumbItem>{category}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className="">
                <div className="headline py-7">
                    <h1 className='md:text-4xl text-3xl font-bold'>{category}</h1>
                </div>
                <div className="stack flex justify-between gap-5">
                    <div className="items w-full flex flex-col gap-5">
                        <div className="body flex flex-col">
                            {ITEMS.map((item, index) => (
                                <div className={`${index % 2 == 0 && 'bg-gray-100 bg-[#45270f10]'} md:flex gap-7 w-full p-5 rounded-xl`} key={index}>
                                    <div className={`lg:w-[25%] md:w-1/3 w-full overflow-hidden group ${index % 2 == 0 ? 'order-1' : 'order-2'}`}>
                                        <img src={item.img} alt="" className='w-full h-full rounded-md group-hover:scale-110 transition ease-linear' />
                                    </div>
                                    <div className={`lg:w-[75%] md:w-2/3 w-full flex justify-between ${index % 2 == 0 ? 'order-2' : 'order-1'}`}>
                                        <div className="flex flex-col gap-3">
                                            <p className='text-xl font-bold'>{item.title}</p>
                                            <p className='text-lg text-gray-700'>{item.category}</p>
                                            <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem non dolorum fuga. Laborum eveniet delectus nesciunt labore ducimus, culpa autem a? Mollitia dicta dolor cumque dolores, nostrum impedit atque obcaecati ullam possimus natus tempora aperiam doloremque dignissimos dolore aut explicabo sapiente, totam soluta architecto facilis. Rem, itaque laboriosam. Cumque, voluptas.</p>
                                            <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam inventore tempore quibusdam deserunt maiores? Tempora, esse cupiditate? Nostrum ipsum vel voluptatibus eos voluptas, nemo nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div className="pt-10 pb-5">
                            <Pagination isCompact showControls total={10} initialPage={1} />
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products