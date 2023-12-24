import { useAuth } from "./store"
import login from "./login"
import { useLoader,useModal } from "./store"
let headers=new Headers

headers.append("Content-Type","application/json")


let register=async(data)=>{
    useLoader.setState({loader:true})
    let response = await fetch(
      "https://groobackend-production.up.railway.app/api/signup/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
      }
    );
    if(response.status==200){
        await login({"email":data.email,"password":data.password})
    }
    else{
        useLoader.setState({ loader: false });
        useModal.setState({ modal: true });

    }
}



export default register;

