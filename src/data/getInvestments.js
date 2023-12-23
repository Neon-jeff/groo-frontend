import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";
import { csrfcookie } from "./token";
import Cookies from "universal-cookie";

let cookie = new Cookies();

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default async function getUserInvestment() {
  let res = await client.get("/api/investment/");
  return res;
}
