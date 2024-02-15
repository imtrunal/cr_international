import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import { useParams } from 'react-router-dom'
import Slider from '../components/Slider'

const ITEMS = [
    {
        img: `/assets/image1.png`,
        title: `Grande`,
        category: `Blossom Punch`,
        description: ``
    }
]

const detailsOfProduct = [
    {
        name: "CoffeeCups",
        title: "Coffee Cups",
        img: '/assets/CoffeeCups/7.png',
        description: [
            "(1) CA-SW8-WHT 8 oz / 280 ml Brim fill: 300 ml 50 / sleeve 1000 / carton",
            "(2) CA-SW16-WHT 16 oz / 460 ml Brim fill: 495 ml 25 / sleeve 500 / carton",
            "(3) CA-SW12-BRN 12 oz / 355 ml Brim fill: 390 ml 50 / sleeve 1000 / carton",
            "(4) CA-SW16-BRN 16 oz / 460 ml Brim fill: 495 ml 25 / sleeve 500 / carton",
            "(5) CA-SW8-BRN 8 oz / 280 ml Brim fill: 300 ml 50 / sleeve 1000 / carton",
            "(6) CA-HCSLID White 86mm / Fits 8, 12 & 16oz cups 100 / sleeve 1000 / carton",
            "(7) CA-HCSLIDB Black 86mm / Fits 8, 12 & 16oz cups 100 / sleeve 1000 / carton",
        ]
    },
    {
        name: "FoodContainer",
        title: "Food Container",
        img: '/assets/FoodContainer/2.png',
        description: [
            "(1) CA-WEDGEMED-BRN Window Paper Sandwich Wedge Brown kraft 123 x 72 x 123 mm 100 / sleeve 500 / carton",
            "(2) CA-DTR-BRN Medium Window Platter Brown kraft 250 x 280 x 80 mm 100 / carton",
            "(3) CA-DTRLID-BRN Medium Window Platter Lid Clear 250 x 280 x 30 mm 100 / carton",
            "(4) CA-DTRL-BRN Large Window Platter Brown kraft 360 x 250 x 80 mm 100 / carton",
            "(5) CA-DTRLLID-BRN Large Window Platter Lid Clear 360 x 250 x 30 mm 100 / carton",
            "(6) CA-TR2-BRN Small Paper Food Tray #2 Brown kraft Top: 140 x 105 x 40 mm Base: 110 x 75 x 40 mm 125 / sleeve 500 / carton Fits into paper bag: CA-BF01",
            "(7) CA-TR3-BRN Medium Paper Food Tray #3 Brown kraft Top: 180 x 130 x 55 mm Base: 140 x 85 x 55 mm 125 / sleeve 500 / carton Fits into paper bag: PB-BF03",
            "(8)CA-TR4-BRN Large Paper Food Tray #4 Brown kraft Top: 220 x 155 x 55 mm Base: 170 x 95 x 55 mm 100 / sleeve 400 / carton Fits into paper bag: CA-BF04",
            "(9)CA-TR5-BRN Extra Large Paper Food Tray #5 Brown kraft Top: 235 x 170 x 80 mm Base: 185 x 110 x 80 mm 100 / sleeve 200 / carton Fits into paper bag: PB-BF08",
            "(10)CA-HDT-BRN Hot Dog Paper Food Tray Brown kraft Top: 220 x 100 x 50 mm Base: 190 x 70 x 50 mm 50 / sleeve 500 / carton Fits into paper bag: PB-BS04",
            "(11)CA-BC-BRN Paper Burger Clam Brown kraft Top: 140 x 140 x 83 mm Base: 105 x 102 x 83 mm 125 / sleeve 500 / carton",
            "(12) CA-SP1-BRN Medium Paper Snack Pack #1 Brown kraft Top: 210 x 110 x 75 mm Base: 175 x 90 x 75 mm 125 / sleeve 500 / carton",
            "(13) CA-SP2-BRN Large Paper Snack Pack #2 Brown kraft Top: 225 x 135 x 75 mm Base: 200 x 110 x 75 mm 125 / sleeve",
        ]
    },
    {
        name: "Cutlery",
        title: "Cutlery",
        img: '/assets/Cutlery/1.png',
        description: [
            "(1) CA-WCF Wooden Forks Natural 160 mm 100 / sleeve 1000 / carton",
            "(2)CA-WCS Wooden Spoons Natural 160 mm 100 / sleeve 1000 / carton",
            "(3)CA-WCCS Wooden Chopsticks, paper wrapped Natural 203 mm 100 / sleeve 3000 / carton",
            "(4)CA-WCSP Wooden Sporks Natural 160 mm 100 / sleeve 1000 / carton",
            "(5)CA-WNAPCUT Cutlery Pack, paper wrapped Natural Knife, fork and 2Ply napkin Napkin: 230 x 230 mm 400 / carton",
            "(6)CA-WCK Wooden Knives Natural 165 mm 100 / sleeve 1000 / carton",
            "(7)CA-WNAPCUT3 Cutlery Pack, paper wrapped Natural Knife, fork and 2Ply napkin Napkin: 230 x 230 mm 400 / carton",
            "(8)CA-WCT Wooden Teaspoons Natural 110 mm 100 / sleeve 2000 / carton Point-of-",
        ]
    },
    {
        name: "PaperBags",
        title: "Paper Bags",
        img: '/assets/PaperBags/1.png',
        description: [
            "(1)CA-WF1/4 / CA-BF1/4 #¼ Flat White / brown 140 x 102 mm 1000 / bundle",
            "(2)CA-WF1/2 #½ Flat White 160 x 127 mm 1000 / bundle",
            "(3)CA-WF01 / CA-BF01 #1 Flat White / brown 180 x 140 mm 1000 / bundle",
            "(4)CA-WF01W / CA-BF01W #1 Square flat White / brown 195 x 165 mm 1000 / bundle",
            "(5)PB-WF02 / PB-BF02 #2 Flat White / brown 250 x 165 mm 500 / bundle",
            "(6)CA-WF03 / PB-BF03 #3 Flat White / brown 245 x 200 mm 500 / bundle",
            "(7)CA-WF02W / CA-BF02W #2 Square flat White / brown 210 x 200 mm 500 / bundle",
            "(8)PB-WF06 / PB-BF06 #6 Flat White / brown 350 x 235 mm 500 / bundle"
        ]
    },
    {
        name: "Condments",
        title: "Condments",
        img: '/assets/Condments/1.png',
        description: [
        ]
    },
    {
        name: "WrappingPaper",
        title: "Wrapping Paper",
        img: '/assets/WrappingPaper/1.png',
        description: [
        ]
    }
]


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
                            {detailsOfProduct.map((item, index) => {
                                if (item.name === category) {
                                    console.log(item)
                                    return (
                                        <div className={` ${index % 2 == 0 && 'bg-gray-100 bg-[#45270f10]'} md:flex gap-7 w-full p-5 rounded-xl relative`} key={index}>
                                            <div className={`lg:w-[25%] md:w-1/3 h-full max-h-96 rounded-md w-full overflow-hidden group`}> {/*${index % 2 == 0 ? 'order-1' : 'order-2'}*/}
                                                <img src={item.img} alt="" className='w-full h-full max-h-96 rounded-md group-hover:scale-110 transition ease-linear' />
                                            </div>
                                            <div className={`lg:w-[75%] md:w-2/3 w-full flex justify-between`}> {/*${index % 2 == 0 ? 'order-2' : 'order-1'}*/}
                                                <div className="flex flex-col gap-3">
                                                    <p className='text-xl font-bold'>{item.title}</p>
                                                    {/* <p className='lg:text-base text-sm'>{item.description}</p> */}
                                                    <div>
                                                        {(item.description).map((item, index) =>
                                                            <p className='lg:text-base text-sm' key={index}>{item}</p>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    // } else {
                                    //     <div>
                                    //         <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem non dolorum fuga. Laborum eveniet delectus nesciunt labore ducimus, culpa autem a? Mollitia dicta dolor cumque dolores, nostrum impedit atque obcaecati ullam possimus natus tempora aperiam doloremque dignissimos dolore aut explicabo sapiente, totam soluta architecto facilis. Rem, itaque laboriosam. Cumque, voluptas.</p>
                                    //         <p className='lg:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam inventore tempore quibusdam deserunt maiores? Tempora, esse cupiditate? Nostrum ipsum vel voluptatibus eos voluptas, nemo nulla.</p>
                                    //     </div>
                                }
                            })}
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