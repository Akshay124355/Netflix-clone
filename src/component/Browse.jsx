import React, { useEffect } from 'react'
import Header from '../layout/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './maincontainer/MainContainer'
import SecondaryContainer from './secondarycontainer/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
