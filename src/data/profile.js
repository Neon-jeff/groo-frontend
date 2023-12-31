import { useAuth } from "./store";
import { userStore } from "./store";
import axios from "axios";
import { csrfcookie } from "./token";
import Cookies from "universal-cookie";
import { useModal, useLoader } from "./store";




let cookie = new Cookies();

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
};

// https://groobackend-production.up.railway.app
// http://127.0.0.1:8000/

const client = axios.create({
  baseURL: "https://groobackend-production.up.railway.app",
});

export default async function updateProfile(data) {
  useLoader.setState({ loader: true });
  client
    .patch("/api/profile/", data)
    .then(function (res) {
    // localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch((e) => {
      useLoader.setState({ loader: false });
      useModal.setState({ modal: true });
    })
    .then((data) =>
      client.get("/api/profile/").then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        userStore.setState({ user: res.data });
        useLoader.setState({ loader: false });
        window.location.assign("/users/verify/complete")
      })
    );
}
