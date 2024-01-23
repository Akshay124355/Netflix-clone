import React from 'react'
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  // const getMovieTrailner
  return (

    <div className='w-screen aspect-video absolute pt-[15%] px-24 text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='py-8 w-1/4'>{overview}</p>
      <div className='flex'>
        <button className='text-black bg-white p-4 px-14 rounded-lg text-xl font-bold flex flex-row justify-items-center hover:bg-opacity-60'>
          <span><IoMdPlay className='text-3xl mr-1' /></span>
          <span>play</span>
        </button>
        <button className='text-black bg-gray-500 p-4 px-14 mx-4 rounded-lg text-xl font-bold flex flex-row justify-items-center'>
          <IoMdInformationCircleOutline className='text-3xl text-white'/>
          MoreInfo</button>
      </div>
    </div>
  )
}

export default VideoTitle;