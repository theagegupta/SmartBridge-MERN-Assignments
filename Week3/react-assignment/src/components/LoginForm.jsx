import React, { useState } from 'react'

const LoginForm = () => {

    const [mail, setmail] = useState('');
    const [pswd, setpswd] = useState('');


    function pswdHandler(event)
    {
        setpswd(event.target.value)
    }
    
    function mailHandler(event)
    {
        setmail(event.target.value)

    }

   const LoginHandler = () =>{
    alert(`Email:${mail} \nPassword:${pswd}`);
   }

  return (
    <div className=' p-5'>
        <form onSubmit={LoginHandler} className='flex text-xl gap-2 flex-col w-fit border m-auto p-10 rounded-xl'>
        <label htmlFor="mail">Email : </label>
        <input
        value={mail}
        onChange={mailHandler}
         className='p-2 rounded bg-transparent outline outline-1 outline-yellow-200 pl-3' placeholder='Enter email'  type="email" id='mail'/>

        <label htmlFor="pswd">Password : </label>
        <input 
        value={pswd}
        onChange={pswdHandler}
        className='p-2 rounded bg-transparent outline outline-1 outline-yellow-200 pl-3' placeholder='Enter password' type="password" id='pswd'/>

        <button type='submit' className='border bg-red-500 mt-4 rounded border-none p-1'>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm