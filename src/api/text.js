import axios from "axios"


const url = "http://localhost:8080/"

export const handleCheckPassword =async (password)=>{
    
    try{
        
        const res = await axios.post(`${url}checkPassword` , password , { headers : {"Content-Type" : "text/plain"}})
        return res.data
    }
    catch(error){
        console.log(error)
        return false;
    }
} 



export const handleDeleteText = async(id) =>{

    
    try{    
        const res = await axios.delete(`${url}deleteText`,{
            params : {
                id
            }
        })
        // console.log(res.data)
        return res.data
    }catch(error){
        console.log(error)
        
    }

  }

  export const addNewText = async(newText) =>{
    try{
        const res = await axios.post(`${url}writeText`, newText , {headers : { 
            "Content-Type" : "text/plain"
        }})
        return res
    }catch(error){
        console.log(error)
    }
  }

export const getTextItems =async() => {
    try{

        const res = await axios.get(`${url}getText`)
        // console.log(res.data)
        return res.data


    }
    catch(error){

        console.log(error)
    
    }
}