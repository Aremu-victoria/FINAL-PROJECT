import{ Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import './App.css'
import SignUp from './Pages/Signup'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Subject from './Pages/Subject'
import Signin from './Pages/Signin'

function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Subject" element={<Subject/>} />
        <Route path="*" element={<Signin />} />

      </Routes>
  )
}

export default App
