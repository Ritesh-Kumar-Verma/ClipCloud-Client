import React, { useState } from 'react'
import Toast from './Toast'
import { toast } from 'react-toastify';
const Home = () => {
    
    const [tab,setTab] = useState("Text")
    const tabList = ["Text" , "Image", "Video"]
    const [text , setText] = useState("Sample Text")
    

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text).then(()=>{
            toast.success("Text Copied to Clipboard")
        })
        .catch((error)=>{
            toast.error("Error Copying text",error)
        })
    }

  return (
    <div className=''>
    
        <div className=' bg-[#2F4156] flex gap-2 px-2' >
            {
                tabList.map((data,index)=>{
                    return (
                        <div className={` text-[#F5EFEB] p-2 rounded-b-2xl ${tab === data ? " bg-[#3886df]": ""} 
                         hover:text-[#F5EFEB] hover:cursor-pointer hover:bg-[#3886df]  `}>{data}</div>
                    )
                })
            }
        </div>
        <Toast/>

        <div className='bg-[#567C8D] w-1/3 ml-2 mt-2 rounded-2xl p-2'>

            <div className=' text-[#03283a]'>20/10/2026</div>
            <div className='border border-x-0 ' >{text}</div>
            <div className='flex  justify-end '  > <span className='hover:cursor-pointer' onClick={handleCopy} > &#x1F4CB;</span></div>
        
        </div>

    </div>
  )
}

export default Home