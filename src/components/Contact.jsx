"use client"

import { useState } from "react"
import { Phone, Mail, Linkedin } from "lucide-react"

function ContactPage() {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    company: "",
    enquiryType: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message. We will get back to you soon.")
  }

  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full">
        {/* Hero section with city background */}
        <div className="relative h-[1000px] w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://s40026.pcdn.co/wp-content/uploads/Nairobi-cityscape-2.jpg.optimal.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          <div className="relative z-10 p-4  max-w-7xl mx-auto h-[600px] flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4 font-handwriting">CONTACT US</h1>
            <p className="text-white text-2xl max-w-md mb-6 font-handwriting">
              Our company can offer law-related assistance to customers wanting to operate in significant Kenyan
              markets.
            </p>
            <a
              href="#contact-form"
              className="bg-[#7FDFF7] text-black px-6 py-2 rounded-full font-handwriting inline-block w-fit text-2xl"
            >
              send a message
            </a>
          </div>
        </div>

        {/* Blue banner */}
        <div className="bg-[#4A90E2] p-4 text-white text-center m-20">
          <p className="font-handwriting text-2xl">
            At Namada and Co Advocates, we adhere to principles of integrity and excellence while our path integrates
            distinguished traditions that maintain unwavering commitment to justice and excellence.
          </p>
        </div>

        {/* Connect with us section */}
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h2 className="text-4xl text-center mb-8 font-handwriting">Connect with us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
  {/* Call us */}
  <div className="bg-[#4A90E2] p-6 rounded-md text-white text-2xl h-[200px]">
    <div className="flex items-start gap-4">
      <div className="bg-white p-3 rounded-full">
        <Phone className="h-6 w-6 text-[#FF6347]" />
      </div>
      <div>
        <h3 className="text-4xl font-handwriting">Call us</h3>
        <p className="font-handwriting">0 7908 2589 28</p>
      </div>
    </div>
  </div>

  {/* Email us */}
  <div className="bg-[#4A90E2] p-6 rounded-md text-white text-2xl h-[200px]">
    <div className="flex items-start gap-4">
      <div className="bg-white p-3 rounded-full">
        <Mail className="h-6 w-6 text-[#FF6347]" />
      </div>
      <div>
        <h3 className="text-4xl mb-2 font-handwriting">Email us</h3>
        <p className="font-handwriting">info@quastels.com</p>
      </div>
    </div>
  </div>

  {/* LinkedIn - centered below the two above */}
  <div className="lg:col-span-3 flex justify-center">
    <div className="bg-[#4A90E2] p-6 rounded-md text-white text-2xl h-[200px] w-[700px] ">
      <div className="flex items-start gap-4">
        <div className="bg-white p-3 rounded-full">
          <Linkedin className="h-6 w-6 text-[#FF6347]" />
        </div>
        <div>
          <h3 className="text-4xl mb-2 font-handwriting">Connect with us on LinkedIn</h3>
          <p className="font-handwriting text-2xl">/company/quastels</p>
        </div>
      </div>
    </div>
  </div>
</div>


          {/* Contact form */}
          <div id="contact-form" className="border border-[#4A90E2] rounded-lg p-10 max-w-4xl mx-auto shadow-lg bg-white">
  <h2 className="text-4xl mb-8 font-handwriting text-center">Send us a message</h2>

  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label htmlFor="title" className="block mb-1 text-[#FF6347] font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
         
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded text-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="firstName" className="block mb-1 text-[#FF6347] font-semibold">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
         
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded text-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block mb-1 text-[#FF6347] font-semibold">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded text-lg"
          required
        />
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <label htmlFor="email" className="block mb-1 text-[#FF6347] font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
         
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded text-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="telephone" className="block mb-1 text-[#FF6347] font-semibold">
          Telephone Number
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
         
          value={formData.telephone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded text-lg"
        />
      </div>
      <div>
        <label htmlFor="company" className="block mb-1 text-[#FF6347] font-semibold">
          Company / Sole Proprietorship
        </label>
        <input
          type="text"
          id="company"
          name="company"
          
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded text-lg"
        />
      </div>
    </div>

    <div>
      <label htmlFor="enquiryType" className="block mb-1 text-[#FF6347] font-semibold">
        Enquiry Type
      </label>
      <input
        type="text"
        id="enquiryType"
        name="enquiryType"
       
        value={formData.enquiryType}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded text-lg"
        required
      />
    </div>

    <div>
      <label htmlFor="message" className="block mb-1 text-[#FF6347] font-semibold">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        
        value={formData.message}
        onChange={handleChange}
        rows={6}
        className="w-full p-3 border border-gray-300 rounded text-lg"
        required
      ></textarea>
    </div>

    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-[#7FDFF7] text-black px-10 py-4 rounded-full font-handwriting text-2xl hover:bg-[#5fc9e6] transition"
      >
        Submit Message
      </button>
    </div>
  </form>
</div>

        </div>
      </div>
    </main>
  )
}

export default ContactPage
