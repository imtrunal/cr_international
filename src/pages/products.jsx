import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'

const ITEMS = [
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        description: `
        
        
        
        `
    }
]


// const categoryObject = [
//     {
//         title: 'PaperBags',
//         img: [
//             '/assets/PaperBags/1.png',
//             '/assets/PaperBags/2.png',
//             '/assets/PaperBags/3.png',
//             '/assets/PaperBags/4.png',
//         ]
//     },
//     {
//         title: 'CoffeeCups',
//         img: [
//             '/assets/CoffeeCups/1.png',
//             '/assets/CoffeeCups/2.png',
//             '/assets/CoffeeCups/3.png',
//             '/assets/CoffeeCups/4.png',
//             '/assets/CoffeeCups/5.png',
//             '/assets/CoffeeCups/6.png',
//             '/assets/CoffeeCups/7.png',
//             '/assets/CoffeeCups/8.png',
//             '/assets/CoffeeCups/9.png',
//         ]
//     },
//     {
//         title: 'FoodContainer',
//         img: [
//             '/assets/FoodContainer/1.png',
//             '/assets/FoodContainer/2.png',
//             '/assets/FoodContainer/3.png',
//             '/assets/FoodContainer/4.png',
//             '/assets/FoodContainer/5.png',
//             '/assets/FoodContainer/6.png',
//             '/assets/FoodContainer/7.png',
//             '/assets/FoodContainer/8.png',
//         ]
//     },
//     {
//         title: 'Cutlery',
//         img: [
//             '/assets/Cutlery/1.png',
//             '/assets/Cutlery/2.png',
//             '/assets/Cutlery/3.png',
//             '/assets/Cutlery/2.png',
//         ]
//     },
//     {
//         title: 'Condments',
//         img: [
//             '/assets/Condments/1.png',
//             '/assets/Condments/1.png',
//             '/assets/Condments/1.png',
//             '/assets/Condments/1.png',
//         ]
//     },
//     {
//         title: 'WrappingPaper',
//         img: [
//             '/assets/WrappingPaper/1.png',
//             '/assets/WrappingPaper/2.png',
//             '/assets/WrappingPaper/1.png',
//             '/assets/WrappingPaper/2.png',
//         ]
//     },
//     {
//         title: 'All',
//         img: [
//             '/assets/PaperBags/2.png',
//             '/assets/PaperBags/3.png',
//             '/assets/CoffeeCups/4.png',
//             '/assets/CoffeeCups/5.png',
//             '/assets/CoffeeCups/6.png',
//             '/assets/FoodContainer/3.png',
//             '/assets/FoodContainer/4.png',
//             '/assets/FoodContainer/5.png',
//             '/assets/Cutlery/3.png',
//             '/assets/Cutlery/2.png',
//             '/assets/Condments/1.png',
//             '/assets/WrappingPaper/1.png',
//             '/assets/WrappingPaper/2.png',
//         ]
//     },
// ]

const Products = () => {
    let { category } = useParams()
    // let breadcrumbsTitle;

    if (category == null) {
        category = "All"
        // breadcrumbsTitle = category == "All" ? "Products" : category;
    }

    return (
        <main className='py-5 px-10'>
            {/* <div className="">
            <img src="/assets/hero.png" alt="" />
        </div> */}
            <Slider category={category} />
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
                                            <p className='text-lg text-gray-700'>{item.category} </p>
                                            {/* <p className='lg:text-base text-sm'>{item.description}</p> */}
                                            <p className='lg:text-base text-sm'>

                                                (1)CA-WF1/4 / CA-BF1/4
                                                #¼ Flat
                                                White / brown
                                                140 x 102 mm
                                                1000 / bundle <br />

                                                (2)CA-WF1/2
                                                #½ Flat
                                                White
                                                160 x 127 mm
                                                1000 / bundle <br />

                                                (3)CA-WF01 / CA-BF01
                                                #1 Flat
                                                White / brown
                                                180 x 140 mm
                                                1000 / bundle <br />

                                                (4)CA-WF01W / CA-BF01W
                                                #1 Square flat
                                                White / brown
                                                195 x 165 mm
                                                1000 / bundle <br />

                                                (5)PB-WF02 / PB-BF02
                                                #2 Flat
                                                White / brown
                                                250 x 165 mm
                                                500 / bundle <br />

                                                (6)CA-WF03 / PB-BF03
                                                #3 Flat
                                                White / brown
                                                245 x 200 mm
                                                500 / bundle <br />

                                                (7)CA-WF02W / CA-BF02W
                                                #2 Square flat
                                                White / brown
                                                210 x 200 mm
                                                500 / bundle <br />

                                                (8)PB-WF06 / PB-BF06
                                                #6 Flat
                                                White / brown
                                                350 x 235 mm
                                                500 / bundle <br />

                                            </p>
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