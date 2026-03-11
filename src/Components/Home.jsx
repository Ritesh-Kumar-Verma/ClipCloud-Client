import React, { useEffect, useState } from "react";
import Toast from "./Toast";
import { toast } from "react-toastify";
import { addNewText, getTextItems, handleDeleteText } from "../api/text";
const Home = () => {
  const [tab, setTab] = useState("Text");
  const tabList = ["Text", "Image", "Video"];
  const [newText, setNewText] = useState("")

  const [items, setItems] = useState([
    {
      date: "2026-02-26",
      id:9,
      text: "asdasdasdasdasdsadg",
    },
  ]);

 const handleGetTextItems = () => {
  getTextItems().then((res) => {
    if(res){
      setItems(res)
    }
  });
};

const handleAddNewText = ()=>{
  if(newText.trim() == ""){
    return
  }
  addNewText(newText).then((res)=>{
    if(res){
      setNewText("")
      handleGetTextItems()
      // console.log(res)
    }
  })
}

useEffect(()=>{
  handleGetTextItems()

},[])

const handleNewText = (e)=>{
  setNewText(e.target.value)

}


  const handleDelete = (id) =>{

    handleDeleteText(id).then(()=>{
      handleGetTextItems()
    })


    toast.success("Item deleted");
    
  }

  

  const handleCopy = () => {
    navigator.clipboard
      .writeText(items)
      .then(() => {
        toast.success("Text Copied to Clipboard");
      })
      .catch((error) => {
        toast.error("Error Copying text", error);
      });
  };

  return (
    <div className="">
        <div className="bg-[#2F4156] flex justify-between px-2">


      <div className="  flex gap-2">
        {tabList.map((data, index) => {
            return (
                <div key={index}
                className={` text-[#F5EFEB] p-2 rounded-b-2xl ${tab === data ? " bg-[#3886df]" : ""} 
                hover:text-[#F5EFEB] hover:cursor-pointer hover:bg-[#3886df]  `}
                >
              {data}
            </div>
          );
        })}
        </div>

        <button className="text-[#F5EFEB] cursor-pointer" onClick={handleGetTextItems}>Refresh</button>
        
      </div>
      <Toast />
      
<div  className="bg-[#567C8D]  ml-2 mt-2 rounded-2xl  flex justify-center text-3xl">
              
                <input name="newText input" value={newText} onChange={handleNewText} type="text" className="bg-[#F5EFEB] focus:outline-0 rounded-2xl my-2 text-xl px-2 " />
                <span
                  className=" flex justify-center hover:cursor-pointer hover:bg-blue-300 rounded-full h-8 w-8 text-2xl my-2"
                  onClick={handleAddNewText}
                >
                  +
                </span>
            </div>
      
        <div className="flex flex-wrap">

      {items.map((data) => {
        return (
          <div key={data.id} className="flex-1 bg-[#567C8D] min-w-1/4 max-w-fit ml-2 mt-2 rounded-2xl p-2">
            <div className=" text-[#03283a]">{data.date}</div>
            <div className="border border-x-0 ">{data.text}</div>
            <div className="flex justify-between">
              <button>
                <span
                  className="hover:cursor-pointer"
                  onClick={() => handleDelete(data.id)}
                  >
                  🗑️
                </span>
              </button>
              <button >
                
                <span
                  className="hover:cursor-pointer flex justify-end"
                  onClick={handleCopy}
                  >
                  
                  &#x1F4CB;
                </span>
              </button>
            </div>
          </div>
        );
      })}

      </div>


    </div>
  );
};

export default Home;
