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
        <div className="relative h-[400px] w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://framer.com/projects/Namada-and-CO-advocates--pJRSC8ORUD5DFLV13iuU-gEdeC?node=OJomlIqCK')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          <div className="relative z-10 p-8 max-w-5xl mx-auto h-full flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-white mb-4 font-handwriting">CONTACT US</h1>
            <p className="text-white text-lg max-w-md mb-6 font-handwriting">
              Our company can offer law-related assistance to customers wanting to operate in significant Kenyan
              markets.
            </p>
            <a
              href="#contact-form"
              className="bg-[#7FDFF7] text-black px-6 py-2 rounded-full font-handwriting inline-block w-fit"
            >
              send a message
            </a>
          </div>
        </div>

        {/* Blue banner */}
        <div className="bg-[#4A90E2] p-4 text-white text-center">
          <p className="font-handwriting text-2xl">
            At Namada and Co Advocates, we adhere to principles of integrity and excellence while our path integrates
            distinguished traditions that maintain unwavering commitment to justice and excellence.
          </p>
        </div>

        {/* Connect with us section */}
        <div className="max-w-5xl mx-auto py-8 px-4">
          <h2 className="text-2xl text-center mb-8 font-handwriting">Connect with us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#4A90E2] p-6 rounded-md text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 font-handwriting text-4xl">Call us</h3>
                  <p className="font-handwriting">020 7908 2528</p>
                </div>
              </div>
            </div>

            <div className="bg-[#4A90E2] p-6 rounded-md text-white">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 font-handwriting">email us</h3>
                  <p className="font-handwriting">info@quastels.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#4A90E2] p-6 rounded-md text-white md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-[#4A90E2]" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 font-handwriting">Connect with us on LinkedIn</h3>
                  <p className="font-handwriting">/company/quastels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div id="contact-form" className="border border-[#4A90E2] rounded-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl mb-6 font-handwriting text-center">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="title" className="sr-only">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="sr-only">
                    Telephone number
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="Telephone number"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">
                    Company / Sole Proprietorship
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company / Sole Proprietorship"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="enquiryType" className="sr-only">
                  Enquiry Type
                </label>
                <input
                  type="text"
                  id="enquiryType"
                  name="enquiryType"
                  placeholder="Enquiry Type"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="bg-[#7FDFF7] text-black px-8 py-3 rounded-full font-handwriting">
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
