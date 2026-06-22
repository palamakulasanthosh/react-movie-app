import React from 'react'
import mockMovies from './data/mockMovies'
import { useState, useEffect } from 'react'
import Moviecard from './Components/Moviecard'
import Movieopen from './Components/Movieopen'
import Header from './Components/Header'
const Initial_movies = 20
const Initial_perload = 10
const App = () => {
  const [movies, setmovies] = useState([])
  const [visible, setvisible] = useState(Initial_movies)
  const [open, setopen] = useState(null)
  const [filter, setfilter] = useState('')
  const [sortyear, setsortyear] = useState(null)
  const [dark, setdark] = useState(false)
  useEffect(() => {
    setmovies(mockMovies)
  }, [])
  const showMore = () => {
    setvisible((prev) => prev + Initial_perload)
  }
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );
  if(sortyear === 'asc'){
    filteredMovies.sort((a,b)=>a.year-b.year)
  }
  else if(sortyear === 'des'){
    filteredMovies.sort((a,b)=> b.year-a.year)
  }

  const display = filteredMovies.slice(0, visible)
  return (
    <div className={dark ? 'bg-black text-white min-h-screen': 'bg-white min-h-screen'}>
      <Header className={dark?'text-black':'text-white'} filter={filter} setfilter={setfilter} sortyear={sortyear} setsortyear={setsortyear} dark={dark} setdark={setdark} />
      <div className="cards mx-2 my-5 flex flex-wrap  ">
        {display.map((movie) => (
          <Moviecard key={movie.id} movie={movie} opens={setopen} />
        ))}
      </div>

      {
        visible < movies.length && (
          <div className='load-more'>
            <button onClick={showMore} className='block mx-auto px-6 py-2 my-7 bg-red-600 text-white rounded-lg'>Show More</button>
          </div>
        )
      }
      {
        open && (
          < Movieopen movie={open} close={() => setopen(null)} />
        )
      }



    </div>
  )
}

export default App
