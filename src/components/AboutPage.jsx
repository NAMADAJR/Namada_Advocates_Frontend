import { RatioIcon, Award, UserSearch, FileCheck } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

function AboutPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Move from right to left (-100% to 0%)
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "0%"])

  // Fade out in the middle of scroll and back in
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 0, 0, 1])

  return (
    <main className="flex flex-col items-center mt-20 ">
      <div className="  px-4 py-8">
        {/* Top section with image and firm description */}
        <div className="flex flex-col md:flex-row gap-6 mb-20 max-w-20xl">
          <div className="md:w-2/3 flex justify-center">
            <img src="/hammer.webp" alt="Law gavel and book" width={340} height={380} className="object-cover" />
          </div>
          <div className="md:w-2/3">
            <div className="bg-[#7FDFF7] p-6 rounded-md h-full shadow-lg sticky-note">
              <p className="text-3xl font-handwriting mt-20">
                Namada and Co Advocates is a boutique law firm dedicated to international arbitration. We are committed
                to delivering legal representation of the highest quality in complex international disputes, including
                commercial arbitrations, investor-State arbitrations, and arbitration-related litigation.
              </p>
            </div>
          </div>
        </div>

        <section className="h-[200px] bg-[#7FDFF7] flex items-center justify-center">
      <div ref={ref} className="sticky top-1/2 text-center">
        <motion.h1
          style={{ x, opacity }}
          className="text-5xl font-bold whitespace-nowrap"
        >
          Artistry in Reason
        </motion.h1>
      </div>
    </section>
        {/* Our Values section */}
        <div className="mb-20 mt-10 max-w-6xl">
          <h2 className="text-3xl text-center mb-6 font-handwriting">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#4A90E2] p-6 rounded-md flex flex-col items-center">
              <div className="bg-white p-3 rounded-full mb-10">
                <RatioIcon className="h-10 w-10 text-[#4A90E2]" />
              </div>
              <h3 className="text-4xl mb-2 font-handwriting">Integrity</h3>
              <p className="font-handwriting text-2xl text-center">Upholding the highest ethical standards in every case.</p>
            </div>
            <div className="bg-[#4A90E2] p-6 rounded-lg flex flex-col items-center">
              <div className="bg-white p-3 rounded-full mb-10">
                <Award className="h-10 w-10 text-[#4A90E2]" />
              </div>
              <h3 className="text-4xl mb-2 font-handwriting">Excellence</h3>
              <p className="font-handwriting text-2xl text-center">Committed to delivering superior legal services.</p>
            </div>
            <div className="bg-[#4A90E2] p-6 rounded-md flex flex-col items-center">
              <div className="bg-white p-3 rounded-full mb-10">
                <UserSearch className="h-10 w-10 text-[#4A90E2]" />
              </div>
              <h3 className="text-4xl mb-2 font-handwriting">Client-Centered</h3>
              <p className="font-handwriting text-2xl text-center">Prioritizing client needs and tailored solutions.</p>
            </div>
            <div className="bg-[#4A90E2] p-6 rounded-md flex flex-col items-center">
              <div className="bg-white p-3 rounded-full mb-10">
                <FileCheck className="h-10 w-10 text-[#4A90E2]" />
              </div>
              <h3 className="text-4xl mb-2 font-handwriting">Confidentiality</h3>
              <p className="font-handwriting text-2xl text-center">Ensuring complete privacy and discretion in all matters.</p>
            </div>
          </div>
        </div>

        {/* Red banner */}
        <div className="bg-[#E60023] p-4 text-white text-center mb-8 h-20 flex justify-center flex-col">
          <p className="font-handwriting text-2xl">
            At Namada and Co Advocates, we adhere to principles of integrity and excellence while our path integrates
            distinguished traditions that maintain a relentless commitment to justice and excellence.
          </p>
        </div>

        {/* Philosophy section - larger and centered */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#7FDFF7] p-8 rounded-md w-full max-w-3xl shadow-md sticky-note sticky-note-large">
            <p className="text-2xl font-handwriting text-center mt-20">
              Shaped by a distinctive philosophy based on the principles of flexibility and independence, our culture
              centres on a commitment to providing unparalleled expertise and delivering a bespoke service.
            </p>
          </div>
        </div>

        {/* Leadership section */}
        <div className="bg-[#4A90E2] p-6 rounded-md mb-8 ">
          <h2 className="text-4xl mb-6 ml-10 font-handwriting">Our Leadership</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between ml-10 ">
              <img
                src="https://cdn.prod.website-files.com/5fd1d846b5d5b2369c399938/638f1461a3de915790c31615_602a8bba6d3b40466c588d16_paul-1.webp"
                alt="Leadership portrait"
                width={250}
                height={300}
                className="bg-gray-200"
              />
            </div>
            <div className="bg-[#E60023] p-6 rounded-md text-white w-1/2 h-90 ">
              <h3 className="text-4xl mb-2 font-handwriting">Paul J. Stracci</h3>
              <p className="mb-6 font-handwriting text-2xl">
                Paul Stracci is an exceptionally seasoned criminal defense lawyer with notable triumphs in trials.
                Shortly after graduating from law school, he successfully argued his first case involving charges of
                murder, with the jury reaching a unanimous not-guilty decision on all accusations.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/team" className="bg-[#7FDFF7] text-black px-6 py-2 rounded-full font-handwriting text-2xl">
                  See Team
                </a>
                <a href="/careers" className="bg-[#7FDFF7] text-black px-6 py-2 rounded-full font-handwriting text-2xl">
                  Open positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
