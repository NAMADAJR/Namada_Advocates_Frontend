import { Routes, Route, NavLink } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'
import './App.css'
import Consultation from './components/Consultation'

const Home = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center border-2 border-blue-500">
      <h1 className="text-4xl text-blue-800">Namada & Co Advocates</h1>
      <NavLink to="/about" className="text-white mt-4">About</NavLink>
      <NavLink to="/contact" className="text-white mt-4">Contact</NavLink>
      <NavLink to="/consultation" className="text-white mt-4">Consultation</NavLink>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consultation" element={<Consultation />} />
    </Routes>
  )
}

export default App
