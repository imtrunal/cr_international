const Contact = () => {
  return (
    <main>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="mt-10 lg:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/assets/cr_logo.png" alt="CR International" />
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: info@example.com</p>
                    <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></main>
  )
}

export default Contact