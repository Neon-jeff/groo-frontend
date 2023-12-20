import { useState } from "react";
import Home from "./pages/homepage/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authpages/login";
import SignUp from "./pages/authpages/signup";
import AuthContextProvider from "./data/aurhContext";
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
              <Route path="/" element={<Home />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/signup" element={<SignUp />} />
              <Route path="/users/dashboard" element={<Dashboard />} />
              <Route
                path="/users/verify/account-type"
                element={<AccountType />}
              />
              <Route path="/users/verify/contact" element={<Contact />} />
              <Route path="/users/verify/social" element={<SocialNumber />} />
              <Route path="/users/verify/complete" element={<Complete />} />
              <Route
                path="/users/payment/payment-type"
                element={<InvestmentPlan />}
              />
              <Route
                path="/users/payment/checkout"
                element={<PaymentCheckout />}
              />
              <Route
                path="/users/payment/make-payment"
                element={<MakePayment />}
              />
              <Route
                path="/users/payment/success"
                element={<PaymentSuccess />}
              />
              <Route
                path="/users/investments"
                element={<Investments />}
              />
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
