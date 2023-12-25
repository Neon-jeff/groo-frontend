
import axios from "axios";
import { useModal, useLoader } from "./store";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

// https://groobackend-production.up.railway.app

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

export default async function changepassword(data) {
  useLoader.setState({ loader: true });
  let res = await client.post("/api/change-password/", data, {
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
    },
  });
  return res;
}
