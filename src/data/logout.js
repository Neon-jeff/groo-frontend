import { useAuth } from "./store";
import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

let logout = async (data) => {
  client.get("/api/logout/", data).then(function (res) {
      useAuth.setState({isAuthenticated:false})
      localStorage.removeItem("user")
  });
};
export default logout;
