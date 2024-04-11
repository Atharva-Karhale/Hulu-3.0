import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import axios from '../axios'
import { Skeleton } from 'antd'

function Results({selectedOption}) {

  const [movies, setMovies] = useState()
  useEffect(() => {
    async function fetchData() {
      setMovies()
      const request = await axios.get(selectedOption)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [selectedOption])

  console.log(movies)
  return (
    <div className=' flex flex-wrap'>
      { !movies &&
        [...Array(20)].map((_, index) => <div key={ index }>
          <div >
            <Skeleton.Input
              active
              style={{
                width: 240,
                height: 350,
                margin: '20px'
              }}
            />
          </div>
        </div>)
      }
      {
        movies?.map((data, idx) => <VideoCard key={idx} data = {data} />)
      }
        
    </div>
  )
}

export default Results