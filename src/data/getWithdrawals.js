import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";
import { csrfcookie } from "./token";
import Cookies from "universal-cookie";
import { useModal, useLoader } from "./store";
import { useWithdrawal } from "./store";

let cookie = new Cookies();

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

// https://groobackend-production.up.railway.app
// http://127.0.0.1:8000

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

export default async function GetWithdrawals() {
    let data=[]
  await client.get("/api/withdraw/").then((res) => {
    useWithdrawal.setState({data:res.data})
  });

}
