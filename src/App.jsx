import { useState } from "react";
import Home from "./pages/homepage/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authpages/login";
import SignUp from "./pages/authpages/signup";
import AuthContextProvider from "./data/aurhContext";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        data-theme="light"
        className="font-jakata text-md bg-fill overflow-x-hidden w-screen "
      >
        <BrowserRouter>
          <AuthContextProvider>
            {" "}
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="users/login" Component={Login} />
              <Route path="users/signup" Component={SignUp} />
              <Route path="users/dashboard" Component={Dashboard}/>
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
