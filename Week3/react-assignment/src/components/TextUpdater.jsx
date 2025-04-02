import React, { useState, useEffect } from 'react';

const TextUpdater = () => {
    const [text, setText] = useState('');  // creating a useState variable 

 
    

    useEffect(() => {
        console.log('Updated text:', text);
    }, [text]); // This effect runs whenever 'text' changes

    const handleInput = (event) => {
        setText(event.target.value);
    };

    return (
        <div className=''>
            <label htmlFor="input" className='text-lg ml-5 mr-2'>Input some text to display: </label>
            <input
                value={text}
                onChange={(event)=>handleInput(event)}
                type="text"
                className='py-2 px-3 rounded text-yellow-100 text-lg bg-transparent border placeholder:text-yellow-200'
                placeholder='Enter Something'
                id='input'
            />
        </div>
    );
};

export default TextUpdater;
