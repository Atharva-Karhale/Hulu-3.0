import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdCollections } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import {Dropdown, Input} from 'antd'
import request from '../components/Request'

function Header({setSelectedOption}) {
    const onSearch = (value) => {
        let val =String(value).replace(" ", "+")
        setSelectedOption(request.searchMovies + val)
    }
  return (
    <div className=' flex grid-rows-2 flex-col items-center'>
        <img className='mt-4 w-40 object-contain ' src= '/Assets/Hulu_Logo.png' alt = 'hulu' />
        <div className=' flex text-[2rem] justify-between w-full py-8 px-16 font-bold text-[#15E884]'>
            <div onClick={() => setSelectedOption(request.fetchAnimation)} className=' flex flex-col items-center group size-20'>
                <FaHome />
                <p className=' md:text-2xl text-sm text-white hidden group-hover:block'>Home</p>
            </div>
            <div onClick={() => setSelectedOption(request.fetchTrending)} className=' flex flex-col items-center group size-20'>
                <IoMdTrendingUp />
                <p className=' md:text-2xl text-sm text-white hidden group-hover:block'>Trending</p>
            </div>
            <div onClick={() => setSelectedOption(request.fetchTopRated)} className=' flex flex-col items-center group size-20'>
                <RiVerifiedBadgeFill />
                <p className=' md:text-2xl text-sm text-white hidden group-hover:block'>Verified</p>
            </div>
            <div onClick={() => setSelectedOption(request.fetchMystery)} className=' flex flex-col items-center group size-20'>
                <MdCollections />
                <p className=' md:text-2xl text-sm text-white hidden group-hover:block'>Collections</p>
            </div>
            <div className=' flex flex-col items-center group size-20'>
                <Dropdown 
                    overlay={
                        <Input.Search
                            placeholder='Search, Movies, Collections, TV...'
                            enterButton = "Search"
                            size='large'
                            onSearch={onSearch}
                            />
                    }
                    placement={'bottomLeft'}
                    overlayStyle={{
                        background: 'transparent'
                    }}
                >
                    <FaSearch />
                    
                </Dropdown>
                
            </div>
            <div className=' flex flex-col items-center group size-20'>
                <MdAccountCircle />
                <p className=' md:text-2xl text-sm text-white hidden group-hover:block'>Account</p>
            </div>
        </div>
    </div>
  )
}

export default Header