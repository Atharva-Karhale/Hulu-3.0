import React, { useEffect, useState } from 'react'
import { MdPoll } from "react-icons/md";
import { FaImdb } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import ReactCardFlip from 'react-card-flip' 
import PreviewModal from '../utils/PreviewModal';
import truncate from '../utils/Trancate'
import movieTrailer from 'movie-trailer'


export const base_url = 'https://image.tmdb.org/t/p/original'

const VideoCard = ({data}) => {
    const [flipped, setFlipped] = useState(false)
    const [visible, setVisible] = useState(false)
    const [url, setUrl] = useState ("")
    useEffect(() => {
        movieTrailer(data?.original_title || data?.title || data?.original_name, {videoType: data?.media_type}).then ((res) => {
            setUrl(res)
        }).catch ((err) => {
            console.log("Temporarily UnavaiLable")
        })
    }, [data?.orignal_title, data?.title, data?.original_name])



  return (<div className=' px-2 py-6 mx-auto'>
    <ReactCardFlip isFlipped={!flipped} flipDirection='horizontal'>
        
        <div onClick= {() => setFlipped(!flipped)} className=' cursor-pointer text-white w-60 h-96 p-4 bg-[#000000] shadow-2xl rounded'>

            <h2 className=' text-3xl font-bold '>{truncate(data?.orignal_title || data?.title || data?.original_name, 18)}</h2>
            <p className=' text-sm'>{truncate(data?.overview, 150)}</p>

            <span className=' flex items-center pt-6'><MdPoll className=' text-3xl mr-1' /> {data?.vote_count} | {data?.release_date || data?.first_air_date}</span>

            <span className=' flex items-center pt-2'>
                <FaImdb className=' text-3xl mr-1' /> {data?.vote_average}
            </span>

            <span onClick={() => setVisible(true)} className=' flex items-center pt-8'>
                <FaPlay className=' text-4xl p-2 mr-2 bg-[#15E884] rounded'/>
                <strong className=' text-[1.8rem] underline -underline-offset-2  font-normal'>
                    Watch Now
                </strong>
            </span>

        </div>

        <div onClick= {() => setFlipped(!flipped)} className=' cursor-pointer text-white w-60 h-96 bg-[#03ff92] shadow-2xl rounded flex flex-col items-center'>
            <img className=' hover:scale-[1.04] object-contain w-52 mt-4 rounded' src= {`${base_url}${data?.poster_path}`} />
            <h2 className=' mt-3 text-[#272727] font-bold '>{truncate(data?.orignal_title || data?.title || data?.original_name, 18)}</h2>
        </div>
    
    </ReactCardFlip>
    <PreviewModal  
    visible={visible} 
    setVisible={setVisible}
    data = {data}
    url = {url}
    />
    </div>
  )
}

export default VideoCard