import React, { useEffect } from 'react'
import Header from '../layout/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './maincontainer/MainContainer'
import SecondaryContainer from './secondarycontainer/SecondaryContainer'

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse