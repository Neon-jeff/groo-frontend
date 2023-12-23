import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";
import { csrfcookie } from "./token";
import Cookies from "universal-cookie";


let cookie=new Cookies()



axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  "X-CSRFToken": cookie.get("csrftoken"),
};

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default async function updateProfile(data){
  client
    .patch("/api/profile/", data)
    .then(function (res) {
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log(res.data);
    })
    .then((data) =>
      client.get("/api/profile/").then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        userStore.setState({ user: res.data });
      })
    );

};

