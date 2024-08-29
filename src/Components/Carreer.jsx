import React from 'react'
import hiringPost from "../assets/hiring post.jpg"
import hiringVideo from "../assets/HIRING REEL .mp4"

const Carreer = () => {
  return (
    <div>
      <h1 className='text-4xl text-center mt-[130px] text-black  bg-white'>Career</h1>
      <p className='text-center text-lg my-[20px] px-2  '>Currently, we are looking for Sales executive, video editor, and graphic designer. <br /> <span className='font-bold'>Apply now at : </span> 0333-8400116,    0316-6700948</p>
      <div className='w-full flex justify-center items-center flex-wrap gap-6'>
        <img src={hiringPost} alt="" className='max:w-full w-[500px] mx-auto ' />

        <video src={hiringVideo} className='max:w-full w-[300px] mx-auto' autoPlay muted loop autoFocus controls>

        </video>
      </div>
    </div>
  )
}

export default Carreer
