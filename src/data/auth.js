import { useAuth } from "./store"
import login from "./login"

let headers=new Headers

headers.append("Content-Type","application/json")


let register=async(data)=>{
    let response=await fetch('http://127.0.0.1:8000/api/signup/',{
        method:"POST",
        body:JSON.stringify(data),
        headers:headers
    })
    if(response.status==200){
        await login({"email":data.email,"password":data.password})
    }
}



export default register;

