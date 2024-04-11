import React, { useState } from 'react'
import request from '../components/Request'



function Navbar({setSelectedOption}) {
    
    const [activeKey, setActiveKey] = useState(1)

  return (
    <div className=' flex text-sm md:text-base text-white justify-between px-6 md:px-16 overflow-x-scroll text-center cursor-pointer'
    style={{
        /* Inline style to hide WebKit scrollbar */
        WebkitOverflowScrolling: 'touch', /* Optional: Enable smooth scrolling on touch devices */
        scrollbarWidth: 'none', /* Firefox scrollbar width property */
        MsOverflowStyle: 'none', /* IE scrollbar style property */
        
      }}
    >
        <h3 onClick={() => {
          setActiveKey(1)
          setSelectedOption(request.fetchTrending)
        } } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 1 && 'text-[#15E884]'}  `}>Trending</h3>

        <h3 onClick={() => {
          setActiveKey(2)
          setSelectedOption(request.fetchTopRated)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 2 && 'text-[#15E884]'}  `}>Top Rated</h3>

        <h3 onClick={() => {
          setActiveKey(3)
          setSelectedOption(request.fetchActionMovies)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 3 && 'text-[#15E884]'}  `}>Action</h3>

        <h3 onClick={() => {
          setActiveKey(4)
          setSelectedOption(request.fetchComedyMovies)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 4 && 'text-[#15E884]'}  `}>Comedy</h3>
        <h3 onClick={() => {
          setActiveKey(5)
          setSelectedOption(request.fetchHorroMovies)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 5 && 'text-[#15E884]'}  `}>Horror</h3>
        <h3 onClick={() => {
          setActiveKey(6)
          setSelectedOption(request.fetchRomanticMovies)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 6 && 'text-[#15E884]'}  `}>Romance</h3>
        <h3 onClick={() => {
          setActiveKey(7)
          setSelectedOption(request.fetchMystery)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 7 && 'text-[#15E884]'}  `}>Mystery</h3>
        <h3 onClick={() => {
          setActiveKey(8)
          setSelectedOption(request.fetchSciFi)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 8 && 'text-[#15E884]'}  `}>Sci-Fi</h3>
        <h3 onClick={() => {
          setActiveKey(9)
          setSelectedOption(request.fetchWestern)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 9 && 'text-[#15E884]'}  `}>Western</h3>
        <h3 onClick={() => {
          setActiveKey(10)
          setSelectedOption(request.fetchAnimation)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 10 && 'text-[#15E884]'}  `}>Animation</h3>
        <h3 onClick={() => {
          setActiveKey(11)
          setSelectedOption(request.fetchTV)} } className={` p-2 hover:text-[#15E884] hover:scale-[1.2]  ${activeKey === 11 && 'text-[#15E884]'}  `}>TV</h3>
    </div>
  )
}

export default Navbar