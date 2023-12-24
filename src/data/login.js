import { useAuth } from "./store";
import { userStore,useModal,useLoader } from "./store";

import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${
JSON.parse(localStorage.getItem("auth"))}
      `,
};

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

let login = async (data) => {
  let header=""
  useLoader.setState({loader:true})
  client
    .post("/api/login/", data)
    .then(function (res) {
      localStorage.setItem("auth",JSON.stringify(res.data.user))
      header=res.data.user
    }).catch(e=>{
        useLoader.setState({ loader: false });
        useModal.setState({ modal: true });
    })
    .then(
      data=>(  client.get(
        '/api/profile/',{
          headers:{
            "Authorization":`Token ${header}`
          }
        }
      )).then(
        res=>{
          useLoader.setState({loader:false})
          localStorage.setItem("user", JSON.stringify(res.data));
          userStore.setState({ user: res.data });
          useAuth.setState({ isAuthenticated: true });
        }

      )
    )
};
export default login;
