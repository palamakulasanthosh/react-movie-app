import React from 'react'

const Moviecard = ({movie,opens}) => {
    return (
        <div>
            <div onClick={()=>opens(movie)} key={movie.id} className="card w-[180px] mx-5 my-5 rounded-2xl overflow-hidden bg-[var(--color-card-light),var(--color-bg-dark)]   shadow-[var(--shadow-light)] transition-all duration-300 hover:-translate-y-2">
                <img className=' w-full h-[260px] object-cover' src={movie.poster} alt="" />
                <h3 className='text-center font-bold'>{movie.title}</h3>
                <p className='text-center text-zinc-600'>{movie.rating}</p>
            </div>
        </div>
    )
}

export default Moviecard
