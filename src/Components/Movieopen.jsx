import React from 'react'

const Movieopen = ({movie,close}) => {
  return (
    <div>
        <div onClick={close} className='card-overlay fixed inset-0 bg-[var(--color-overlay)] flex justify-center items-center '>
            <div onClick={(e)=>e.stopPropagation()} className=" px-2 bg-white w-[200px]">
                <img className='rounded-2xl py-2 object-cover' src={movie.poster} alt="" />
                <h3 className='font-bold'>{movie.title}</h3>
                <p>Rating - {movie.rating}</p>
                <button className='bg-red-500 text-white px-5 py-2 my-2 font-bold  rounded-2xl' onClick={close}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default Movieopen
