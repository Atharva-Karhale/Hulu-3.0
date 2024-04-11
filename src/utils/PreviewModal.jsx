import React, { useEffect, useState } from 'react'
import { Modal, Tooltip } from 'antd'
import ReactPlayer from 'react-player'
import { MdPoll } from 'react-icons/md'
import { FaImdb } from 'react-icons/fa'
import '../utils/PreviewModal.css'
import truncate from './Trancate'
import {base_url} from '../components/VideoCard'
import axios from '../axios'
import { API_KEY } from '../components/Request'
import request from '../components/Request'

const PreviewModal = ({visible, setVisible, data, url}) => {
  const [movieD, setMovieD] = useState()
  useEffect(() => {
    axios.get(request.getMovieDetails + `/${data?.id}?api_key=${API_KEY}&language=en-us`).then((res) => setMovieD(res?.data))
  }, [])

  console.log(movieD)
  return (
    <Modal
        centered
        open = {visible}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        width={1060}
        footer={null}
        destroyOnClose
    >
      <div className=' '>
        <div className=''>
          <ReactPlayer 
            height={400}
            width= '100%'
            light = {`${base_url}${data?.poster_path}`}
            url={url}
            controls={true}
            pip={true}
            />
        </div>
        <div className=' text-white'>
          <h2 className=' text-2xl font-bold pt-2' >{truncate(data?.orignal_title || data?.title || data?.original_name, 18)}</h2>
          <span>
            <div>{truncate(movieD?.tagline, 150)}</div>
          </span>
          <p className=' font-bold pt-2 text-lg'>Overview <br/><span className=' text-sm font-thin '>{truncate(movieD?.overview, 150)}</span></p>
          <p className=' pt-1'><span className=' font-bold text-lg'>Run Time:</span> {movieD?.runtime} Mins</p>
          <p className=' pt-1'><span className=' font-bold text-lg flex items-center '>Genre: {' '}
            {
              movieD?.genres?.map((_data,idx) => <div key={idx} className=' text-sm font-thin ml-2'> {  _data?.name} ||</div>)
            }
          </span>
            
          </p>
          <span className=' flex items-center pt-2'>
            <MdPoll className=' text-2xl mr-1'/> {data?.vote_count} | {data?.release_date || data?.first_air_date}
          </span>
          <span className=' flex items-center mb-2'>
            <FaImdb className=' text-2xl mr-1'/> {data?.vote_average + "/10"}
          </span>
          <span className=' flex'>
            Production Houses: {" "}
            {
              movieD?.production_companies?.map((_, idx) => <Tooltip 
              title={_?.name}
              placement={'top'}
              key={idx}
              className=' pr-4 text-center justify-center flex flex-col items-center pl-4'
              >
              <img 
                className=' bg-white p-2 mr-2 object-contain h-10'
                src= {`${base_url}${_?.logo_path}`}
                alt='notfound'
                height={30}
                width={100}
              />
              <div>{`${_?.name}`}</div>
            </Tooltip>)
            }
            
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default PreviewModal