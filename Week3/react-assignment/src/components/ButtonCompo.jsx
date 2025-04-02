import React from 'react'

const ButtonCompo = () => {
    function clickHandler()
    {
        console.log("Button clicked!");
    }

  return (
    <>
    <button onClick={clickHandler} className='m-5 bg-blue-600 p-3 rounded hover:bg-blue-700'>Click Me</button>
    </>
  )
}

export default ButtonCompo