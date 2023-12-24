import { useAuth } from "./store";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

let logout = async (data) => {

        localStorage.removeItem("auth");
        useAuth.setState({ isAuthenticated: false });
        localStorage.removeItem("user");


};
export default logout;
