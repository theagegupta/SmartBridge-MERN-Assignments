import React, { useState } from 'react'

const Form = () => {

    const [input, setinput] = useState('')


    function handleInput(event){
        setinput(event.target.value);
    }

    function formHandler(event)
    {
        event.preventDefault();
        console.log('Form Data:',input);
        setinput('');
    }

  return (
    <div className='flex justify-center'>
        <form className='border py-20 inline-block    px-20 text-center bg-gray-500 bg-opacity-15 rounded-lg ' onSubmit={formHandler}>
        
        <label htmlFor="input2" className='text-lg ml-5 mr-2'>Enter Something: </label>
            
            <input
                value={input}
                onChange={handleInput}
                type="text"
                className='py-2 px-3 rounded text-yellow-100 text-lg bg-transparent border placeholder:text-yellow-200'
                placeholder='Enter Something'
                id='input2'
            />

            <button type="submit" className='border ml-4 p-3 rounded bg-red-500 active:bg-red-600  '>Submit</button>

        </form>
    </div>
  )
}

export default Form