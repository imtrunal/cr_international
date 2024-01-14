import { Icon } from '@iconify/react'
import { Accordion, AccordionItem, BreadcrumbItem, Breadcrumbs, Checkbox, Input, Pagination } from '@nextui-org/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

    const [view, setView] = useState('grid')

    return (
        <main className='p-5'>
            <div className="">
                <img src="/assets/hero.png" alt="" />
            </div>
            <div className="breadcrumbs pt-16 pb-5">
                <Breadcrumbs color='foreground'>
                    <BreadcrumbItem href='/'>Home</BreadcrumbItem>
                    <BreadcrumbItem>Handbags</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className="">
                <div className="headline py-7">
                    <h1 className='ms:text-3xl text-2xl font-bold'>Handbags</h1>
                </div>
                <div className="stack flex justify-between gap-5">
                    <div className="filters w-3/12 ">
                        <Accordion variant="light" selectionMode='multiple'>
                            <AccordionItem key="1" aria-label="Color" title="Color" indicator={({ isOpen }) => (isOpen ? <Icon icon='ph:minus-square' fontSize={24} color='black' /> : <Icon icon='ph:plus-square' fontSize={24} color='black' />)} disableIndicatorAnimation>
                                <div className="flex flex-col gap-2">
                                    <Checkbox>Blue</Checkbox>
                                    <Checkbox>Maroon</Checkbox>
                                    <Checkbox>Teal</Checkbox>
                                    <Checkbox>Green</Checkbox>
                                    <Checkbox>Off-White</Checkbox>
                                    <Checkbox>Pink</Checkbox>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Color" title="Color" indicator={({ isOpen }) => (isOpen ? <Icon icon='ph:minus-square' fontSize={24} color='black' /> : <Icon icon='ph:plus-square' fontSize={24} color='black' />)} disableIndicatorAnimation>
                                <div className="flex flex-col gap-2">
                                    <Checkbox>Blue</Checkbox>
                                    <Checkbox>Maroon</Checkbox>
                                    <Checkbox>Teal</Checkbox>
                                    <Checkbox>Green</Checkbox>
                                    <Checkbox>Off-White</Checkbox>
                                    <Checkbox>Pink</Checkbox>
                                </div>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Color" title="Color" indicator={({ isOpen }) => (isOpen ? <Icon icon='ph:minus-square' fontSize={24} color='black' /> : <Icon icon='ph:plus-square' fontSize={24} color='black' />)} disableIndicatorAnimation>
                                <div className="flex flex-col gap-2">
                                    <Checkbox>Blue</Checkbox>
                                    <Checkbox>Maroon</Checkbox>
                                    <Checkbox>Teal</Checkbox>
                                    <Checkbox>Green</Checkbox>
                                    <Checkbox>Off-White</Checkbox>
                                    <Checkbox>Pink</Checkbox>
                                </div>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="items w-9/12 flex flex-col gap-5">
                        <div className="head flex justify-between h-fit flex-wrap">
                            <div className="flex items-center gap-3">
                                <div className="btn flex gap-1">
                                    <div className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg ${view == "grid" && 'bg-[#1B4B66] text-white'}`} onClick={() => setView("grid")}>
                                        <Icon icon='lucide:layout-grid' fontSize={24} />
                                    </div>
                                    <div className={`cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg ${view == "list" && 'bg-[#1B4B66] text-white'}`} onClick={() => setView("list")}>
                                        <Icon icon='lucide:layout-list' fontSize={24} />
                                    </div>
                                </div>
                                <p>Showing {1} - {40} of {145} items</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                To show:
                                <input name="" id="" placeholder='9' className='bg-gray-100 w-10 h-10 text-center' min={0} max={10} />
                            </div>
                            <div className="flex gap-1 items-center">
                                Sort by:
                                <input name="" id="" placeholder='Position' className='bg-gray-100 w-32 h-10 text-center' />
                            </div>
                        </div>
                        <div className="body grid grid-cols-3 gap-5">
                            {ITEMS.map((item, index) => (
                                <Link to={`/products/${item.category.replace(" ", "_")}/${item.id}`} key={index}>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="">
                                            <img src={item.img} alt="" className='w-full h-full rounded-md' />
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="">
                                                <p className='font-bold'>{item.title}</p>
                                                <p className='text-gray-700'>{item.category}</p>
                                            </div>
                                            <div className="">
                                                <Icon icon="solar:heart-linear" fontSize={24} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between gap-3">
                                            <div className="flex flex-wrap gap-5 gap-y-1">
                                                <div className="flex">
                                                    <Icon icon="solar:star-bold" fontSize={20} color='goldenrod' />
                                                    <Icon icon="solar:star-bold" fontSize={20} color='goldenrod' />
                                                    <Icon icon="solar:star-bold" fontSize={20} color='goldenrod' />
                                                    <Icon icon="solar:star-bold" fontSize={20} color='goldenrod' />
                                                    <Icon icon="solar:star-linear" fontSize={20} color='goldenrod' />
                                                </div>
                                                <p>{item.Ratings} Ratings</p>
                                            </div>
                                            <div className="flex gap-3 gap-y-1 flex-wrap">
                                                <p className='font-bold'>${item.Price}</p>
                                                <strike>${item.PrevPrice}</strike>
                                                <p className="bold text-red-800 text-lg font-semibold">{item.Offer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="pt-10 pb-5">
                            <Pagination isCompact showControls total={10} initialPage={1} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products