import React, { useState } from 'react'
import cat from '../assets/cat.svg'
import cow from '../assets/cow.svg'
import dog from '../assets/dog.svg'
import gator from '../assets/gator.svg'
import bird from '../assets/bird.svg'
import heart from '../assets/heart.svg'
import horse from '../assets/horse.svg'


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0)
    const handleClick = () => {
        setClicks(clicks + 1)
    }
  return (
    <div onClick={handleClick}>
        <img src="{svgMap[type]}" alt="animal" />
        <img className='w-2.5' src="{heart}" alt="heart" />
    </div>
  )
}

export default AnimalShow
