import axios from "axios";
import { useModal, useLoader } from "./store";

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

export default async function downloadAgreement(id) {
  useLoader.setState({ loader: true });
  await client.get(`/api/get-agreement/${id}`,  {
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("auth"))}`,
    },
  }).then(
    res=>{
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "agreement.pdf");
        document.body.appendChild(link);
        link.click();
        useLoader.setState({ loader: false });
    }
  )
}
