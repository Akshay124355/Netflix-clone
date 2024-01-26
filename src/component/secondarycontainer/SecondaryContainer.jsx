import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className='bg-black'>
      <MovieList movies={movies.nowPlayingMovies} title="Now Playing Movies" />
      <MovieList movies={movies.trendingMovies} title="Trending Movies" />
      <MovieList movies={movies.popularMovies} title="Popular" />
      <MovieList movies={movies.upcomingMovies} title="Upcomming" />
    </div>
  )
}

export default SecondaryContainer