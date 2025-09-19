import React from 'react'

function ProfileCard({title, handle, image, desc}) {
  return (
    <>
    <img className='w-[200px]' src={image} alt="Ai image" />
    <div className='text-xl font-lg p-2'>Title is {title}</div>
    <div className='text-sm p-2'>Handle is {handle}</div> 
    <div className='text-sm p-2'>{desc}</div>
    </>
  )
}

export default ProfileCard
