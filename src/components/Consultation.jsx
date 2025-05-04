"use client"

import { useState } from "react"

function ConsultationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    advocate: "",
    dateTime: "",
    additionalInfo: "",
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
    console.log("Consultation request submitted:", formData)
    alert("Thank you for your consultation request. We will get back to you soon.")
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/law.jpg')" }}
    >
      <div className="w-full h-[1000px] bg-black bg-opacity-70 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-4xl font-handwriting text-white max-w-5xl mx-auto ">
              At Namada & Co Advocates, we are committed to providing expert legal guidance tailored to your needs.
              Whether you're facing a legal challenge or need professional advice, our attorneys are here to help.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-lg overflow-hidden border-2 border-[#4A90E2] shadow-lg p-6 md:p-8 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm">
            <h2 className="text-center text-white text-3xl font-handwriting">Ask for a consultation</h2>
           
            <div className="relative z-10 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full name field */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white placeholder-white placeholder-opacity-90 rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                  required
                />
              </div>

              {/* Email and Phone fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white placeholder-white placeholder-opacity-90 rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white placeholder-white placeholder-opacity-90 rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Sole Proprietorship"
                      className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white placeholder-white placeholder-opacity-90 rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                      required
                    />
                   
                  </div>
                </div>
              </div>

              {/* Reason for application */}
              <div>
                <div className="relative">
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white appearance-none rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                    required
                  >
                    <option value="" disabled>
                      Enter reason for application
                    </option>
                    <option value="Commercial Dispute">Commercial Dispute</option>
                    <option value="International Arbitration">International Arbitration</option>
                    <option value="Legal Advice">Legal Advice</option>
                    <option value="Contract Review">Contract Review</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Advocate and Date/Time selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="relative">
                    <select
                      name="advocate"
                      value={formData.advocate}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white appearance-none rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                      required
                    >
                      <option value="" disabled>
                        Select advocate
                      </option>
                      <option value="Paul J. Stracci">Paul J. Stracci</option>
                      <option value="Jane Smith">Jane Smith</option>
                      <option value="Michael Johnson">Michael Johnson</option>
                      <option value="Any Available">Any Available</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <select
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleChange}
                      className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white appearance-none rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                      required
                    >
                      <option value="" disabled>
                        Select time and date
                      </option>
                      <option value="Morning (9-12), Next Business Day">Morning (9-12), Next Business Day</option>
                      <option value="Afternoon (1-5), Next Business Day">Afternoon (1-5), Next Business Day</option>
                      <option value="Morning (9-12), This Week">Morning (9-12), This Week</option>
                      <option value="Afternoon (1-5), This Week">Afternoon (1-5), This Week</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional information */}
              <div>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="More information about the appointment"
                  rows={4}
                  className="w-full p-3 bg-[#4A90E2] bg-opacity-30 backdrop-blur-sm text-white placeholder-white placeholder-opacity-90 rounded border border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#E60023]"
                ></textarea>
              </div>

              {/* Submit button */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-[#7FDFF7] text-2xl hover:bg-[#E60023] text-black hover:text-white px-10 py-3 rounded-full font-handwriting transition-colors duration-300"
                >
                  Submit request
                </button>
              </div>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  )
}

export default ConsultationPage
