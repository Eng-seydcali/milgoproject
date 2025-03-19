import React from 'react'

function Adegyada() {
  
    const services = [
        {
          title: "Mobile App Development",
          description: "Services related to financial record-keeping, bookkeeping, tax preparation.",
          image: "/mobiledev.jpg",
        },
        {
          title: "IT Support and Consulting",
          description: "Providing technical support, network setup, software installation.",
         
          image: "/programming.jpg",
        },
        {
          title: "Marketing and Advertising",
          description: "Services that help businesses create and execute marketing strategies.",
          
          image: "/marketing.jpg",
        },
        {
          title: "Software Development",
          description: "Assistance with HR-related tasks such as recruitment, employee training, performance.",
          
          image: "/soft.png",
        },
      ];
  return (
    <>
    <section className="py-10 px-4 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white text-black rounded-2xl shadow-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <div className="text-4xl">{service.icon}</div>
              <h3 className="text-xl font-bold mt-2">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
            <div className="relative">
              <div className="absolute bottom-2 right-2 bg-yellow-500 p-2 rounded-full text-black">
                ⬇️
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>


  </>
)

}

export default Adegyada