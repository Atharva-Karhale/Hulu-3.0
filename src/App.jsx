import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Results from './components/Results'
import Request from './components/Request'
import Test from './components/Test'
import Footer from './components/Footer'


function App() {
  const [selectedOption, setSelectedOption] = useState(Request.fetchTrending);
  return (
    <div className=' bg-[#181818]'>
      <Header setSelectedOption = {setSelectedOption} />
      <Navbar setSelectedOption = {setSelectedOption} />
      <Results selectedOption ={selectedOption} />
      <Footer />
    </div>
  )
}

export default App
