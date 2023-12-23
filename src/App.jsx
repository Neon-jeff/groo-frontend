import { useState,useEffect } from "react";
import Home from "./pages/homepage/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authpages/login";
import SignUp from "./pages/authpages/signup";
import Dashboard from "./pages/dashboard/dashboard";
import AccountType from "./pages/profileUpdate/accountType";
import Contact from "./pages/profileUpdate/contact";
import SocialNumber from "./pages/profileUpdate/social";
import Complete from "./pages/profileUpdate/complete";
import InvestmentPlan from "./pages/payment/investmentPlan";
import PaymentCheckout from "./pages/payment/paymentSummary";
import MakePayment from "./pages/payment/makepayment";
import PaymentSuccess from "./pages/payment/success";
import Investments from "./pages/investments/investments";
import { QueryClient,QueryClientProvider } from "react-query";
import ProtectedRoute from "./components/utils/protected";
import RedirectAuth from "./components/utils/redirectDashboard";
import checkAuth from "./data/checkAuth";
import { useAuth,userStore } from "./data/store";



const queryclient= new QueryClient()
function App() {
  let {user,setUser}=userStore(state=>state)
  let setAuth=useAuth(state=>state.setAuth)
  let isAuth=useAuth(state=>state.isAuthenticated)
  let notAuth = useAuth((state) => state.unSet);

useEffect(()=>{
  if(!localStorage.getItem("user")){
    notAuth()
  }
  else{
    setAuth()
  }
},[])

  return (
    <QueryClientProvider client={queryclient}>
      <div
        data-theme="light"
        className="font-jakata text-md bg-fill overflow-x-hidden w-screen "
      >
        <BrowserRouter>
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/users/login"
              element={
                <RedirectAuth>
                  <Login />
                </RedirectAuth>
              }
            />
            <Route
              path="/users/signup"
              element={
                <RedirectAuth>
                  <SignUp />
                </RedirectAuth>
              }
            />
            <Route
              path="/users/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/verify/account-type"
              element={
                <ProtectedRoute>
                  <AccountType />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/verify/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/verify/social"
              element={
                <ProtectedRoute>
                  <SocialNumber />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/verify/complete"
              element={
                <ProtectedRoute>
                  <Complete />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/payment/payment-type"
              element={
                <ProtectedRoute>
                  <InvestmentPlan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/payment/checkout"
              element={
                <ProtectedRoute>
                  <PaymentCheckout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/payment/make-payment"
              element={
                <ProtectedRoute>
                  <MakePayment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/payment/success"
              element={
                <ProtectedRoute>
                  <PaymentSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users/investments"
              element={
                <ProtectedRoute>
                  <Investments />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
