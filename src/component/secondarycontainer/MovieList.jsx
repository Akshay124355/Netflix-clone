import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    return movies && (
        <div className='px-10'>
            <h1 className='p-2 py-4 font-bold text-xl text-white '>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex'>
                    {movies?.map((movies) => {
                        return (
                            <MovieCard posterPath={movies.poster_path} key={movies.id} />
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default MovieList