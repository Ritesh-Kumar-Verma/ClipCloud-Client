import React, { useState } from 'react'
import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {
    const [verify , setVerify] = useState(false)

    
  return (
    <div className='h-screen w-full bg-[#C8D9E6]' >
      {
        verify ? <Home/> :<Login setVerify={setVerify}/>  
      }
      
      
      
    </div>
  )
}

export default App