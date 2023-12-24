import { useAuth } from "./store";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

let checkAuth = async () => {
    let result =null
  await client
    .get("/api/profile/")
    .then(function (res) {
        result=res
      //   useAuth.setState({isAuthenticated:true})
    })
    return result
};
export default checkAuth;
