import { Link } from "react-router-dom"

const About = () => {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 order-2 lg:order-1">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Our Journey from CR Foods Industries to CR packaging</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our family started the food manufacturing industry in 1981 under the banner of CR foods. Sourcing the food packaging material for our brand from many different suppliers over the years has been  stressful and time consuming. In 2012 we decided to open our own packaging company to help our food brand and others as we had understanding of the issues that revolve in procurement of packaging products.</p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Today we are proudly serving over 200 customers as a one stop packaging solution company. We are dedicated to provide integrated packaging solution to cater 4 core services: Packaging Consultation, Creative Design, Mass Production & Superior Quality, Warehousing & Logistics. <br /> 
            We have 5 manufacturing units/plants today and we have recently opened our service center office in Queensland, Australia. As a reliable packaging partner, we will support in providing the solution at the best cost to increase profitability and visibility for your products.
            Our assurance to our customers :
            No quality compromise
            Timely delivery
            You will never see Out of Stock lines
            </p>
            <Link to={"/"} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
            <Link to={"/contact"} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Contact
            </Link>
          </div>
          <div className="flex lg:mt-0 lg:col-span-5 lg:flex order-1 lg:order-2 aspect-video lg:aspect-auto">
            <img src="/assets/about.png" alt="mockup" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

    </main>
  )
}

export default About