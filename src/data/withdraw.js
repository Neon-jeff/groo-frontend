import axios from "axios";
import { useModal, useLoader } from "./store";

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

export default async function withdrawFunds(data) {
  useLoader.setState({ loader: true });
  await client.post("/api/withdraw/", data, {
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
    },
  }).then((res)=>{
    useLoader.setState({ loader: false });
    window.location.assign("/users/dashboard")
  })
  .catch(e=>{
    console.error(e)
  })

}
