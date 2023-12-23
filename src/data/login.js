import { useAuth } from "./store";
import { userStore,useToken } from "./store";

import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${
JSON.parse(localStorage.getItem("auth"))}
      `,
};

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

let login = async (data) => {
  let header=""
  client
    .post("/api/login/", data)
    .then(function (res) {
      localStorage.setItem("auth",JSON.stringify(res.data.user))
      header=res.data.user
    }).then(
      data=>(  client.get(
        '/api/profile/',{
          headers:{
            "Authorization":`Token ${header}`
          }
        }
      )).then(
        res=>{
          window.location.reload()
          localStorage.setItem("user", JSON.stringify(res.data));
          userStore.setState({ user: res.data });
          useAuth.setState({ isAuthenticated: true });
        }

      )
    )
};
export default login;
