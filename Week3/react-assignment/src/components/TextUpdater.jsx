import React, { useState } from 'react'

const TextUpdater = (event) => {
    const [text, settext] = useState('');

    const handleInput = (event)=>
    {
        settext(event.target.value);
        console.log('value is',text)
    }

    return (
        <div className=''>
            <label htmlFor="input" className='text-lg ml-5 mr-2'>Input some text to display : </label>
            <input
                onChange={(event)=>{handleInput(event)}}
                value={text}

            type="text" className='py-2 px-3 rounded text-yellow-100 text-lg bg-transparent border placeholder:text-yellow-200' placeholder='Enter Something' id='input' />
        </div>
    )
}

export default TextUpdater