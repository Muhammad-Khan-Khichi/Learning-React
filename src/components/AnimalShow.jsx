import React from 'react'
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
  return (
    <div>
        <img src="{svgMap[type]}" alt="animal" />
    </div>
  )
}

export default AnimalShow
