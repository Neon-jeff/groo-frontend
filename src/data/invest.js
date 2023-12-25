import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";
import { csrfcookie } from "./token";
import Cookies from "universal-cookie";
import { useModal,useLoader } from "./store";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

export default async function createInvestment(data) {
    useLoader.setState({ loader: true });
  let res = await client.post("/api/investment/", data, {
    headers: {
      "Authorization": `Token ${JSON.parse(localStorage.getItem("auth"))}`,
    },
  });
  return res
}
