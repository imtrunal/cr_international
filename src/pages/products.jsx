import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'

const ITEMS = [
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image2.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image3.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image4.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image2.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image3.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image4.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
    },
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