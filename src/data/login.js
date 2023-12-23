import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

let login = async (data) => {
  client
    .post("/api/login/", data)
    .then(function (res) {
      useAuth.setState({isAuthenticated:true})
    }).then(
      data=>(client.get(
        '/api/profile/'
      )).then(
        res=>{
          localStorage.setItem("user", JSON.stringify(res.data));
          userStore.setState({ user: res.data });
        }

      )
    )
};
export default login;
