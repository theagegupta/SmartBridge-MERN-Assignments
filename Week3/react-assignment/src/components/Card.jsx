import React from 'react'

const Card = (props) => {
  return (
   

    <div className='border w-fit rounded text-center m-4' >
        <img className='aspect-square h-[200px] rounded-t' src={props.img} alt="img" />
        <h2 className='text-xl mt-2'>{props.name}</h2>
        <h3 className='text-gray-300 mb-3'><a href="mailto:ayushgupta11580@gmail.com">{props.mail}</a></h3>
    </div>
        

  )
}

export default Card