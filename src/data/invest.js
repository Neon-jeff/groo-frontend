import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";
import { csrfcookie } from "./token";
import Cookies from "universal-cookie";

console.log(JSON.parse(localStorage.getItem("auth")));

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export default async function createInvestment(data) {
  console.log(csrfcookie());
  let res = await client.post("/api/investment/", data, {
    headers: {
      "Authorization": `Token ${JSON.parse(localStorage.getItem("auth"))}`,
    },
  });
  return res
}
