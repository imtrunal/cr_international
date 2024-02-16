import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <main>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="mt-10 lg:mt-12 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/assets/cr_logo.png" alt="CR International"
                // className="aspect-square"
                />
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">Unit 59 537-561 West St <br />Darling Heights QLD<br />4350</p>
                  </div>
                  {/**
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                */}
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: sales@crint.com.au</p>
                    <p className="mt-1 text-gray-600">Phone:  +61 466 082 010</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <button className="bg-[#fd9c86] hover:bg-[#fc8c70] text-white font-bold py-2 px-4 rounded">
                      <Link to={"mailto:sales@crint.com.au"}>
                        <a href="mailto:sales@crint.com.au">
                          Send Mail
                        </a>
                      </Link>
                    </button>
                    {/**
                    <p className="mt-1 text-gray-600">Email: sales@crint.com.au</p>
                    <p className="mt-1 text-gray-600">Phone:  +61 466 082 010</p>
                   */}
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.5287734358703!2d151.93174957503498!3d-27.608135522618085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b965b081c47e657%3A0xa94861d50a28f81e!2s59%2F537-561%20West%20St%2C%20Darling%20Heights%20QLD%204350%2C%20Australia!5e0!3m2!1sen!2sin!4v1705393223319!5m2!1sen!2sin"
                // width="800"
                // height="400"
                // style="border:0;"
                className="w-full aspect-[16/5] border"
                allowfullscreen=""
                loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section></main>
  )
}

export default Contact