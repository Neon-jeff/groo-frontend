import { useAuth } from "./store"

let headers=new Headers

headers.append("Content-Type","application/json")


let register=async(data)=>{
    let response=await fetch('http://127.0.0.1:8000/api/signup/',{
        method:"POST",
        body:JSON.stringify(data),
        headers:headers
    })
    let result=response
    return result
}



export default register;

