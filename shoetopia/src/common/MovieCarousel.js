import React, { useEffect, useState } from 'react'
import axios from '../axios';
import './MovieCarousel.css'

function MovieCarousel({title, fetchUrl}) {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request )
      setMovies(request.data.results)
    }
    fetchData()
    return (fetchUrl) => {
    }
  }, [])
  
  return (
    <div className='shoeCarouselWrapper'>
      <div className='title'>{title}</div>
      <div className='movieRows'>
        {/* {movies.map(movie => {

        })} */}
      </div>
    </div>
  )
}

export default MovieCarousel