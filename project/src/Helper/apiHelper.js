import axios from "axios"

export const getAllProducts = async () => {

    return   await axios.get("http://localhost:8000/api/getpost").then(res=>{
    return res.data
}).catch (err=>console.log(err))
}
export const getSingleProducts = async (id) =>{
    return await axios.get(`http://localhost:8000/api/getpost/${id}`).then(res=>{
        return res.data
    }).catch (err=>console.log(err))
}
    
