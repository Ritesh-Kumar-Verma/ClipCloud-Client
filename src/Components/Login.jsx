import React, { useEffect, useState } from 'react'
import { handleCheckPassword } from '../api/text'

const Login = ({setVerify}) => {

  const [password , setPassword] = useState("")

  const handleEnterPassword = async() =>{
    if(password.trim() == ""){
      return 
    }
    handleCheckPassword(password).then((res)=>{
      if(res){
        setVerify(res)
      }
    })
  }

  
  return (
    
    <div className='  h-full flex justify-center items-center'>

      <div className=' h-fit border-2 rounded-xl p-2 flex flex-col'>
        <div className='text-xl text-black mx-1'>Enter the password</div>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" className=' m-1 bg-gray-400 focus:outline-0 px-2' />

        <button onClick={handleEnterPassword} className='bg-blue-400 rounded px-2 m-1 hover:cursor-pointer' >Enter</button>

      
      
      </div>
    </div>

  )
}

export default Login