import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCopyOutline } from "react-icons/io5";
import FieldSet from "../../components/AuthComponents/fieldSet";
import createInvestment from "../../data/invest";
import Modal from "../../components/Modal/modal";
import Loader from "../../components/Modal/modalLoader";
import { useModal,useLoader } from "../../data/store";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function MakePayment() {
  let location = useLocation();
  let [crypto, setCrypto] = useState(true);
  let [reciept, setReciept] = useState(null);
  let [isCopied,setIsCopied]= useState(false)
  let navigate = useNavigate();

  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <Modal text={"An error occured, try again"} />
      <Loader />
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" py-10 relative shadow-lg w-full max-sm:px-0 justify-center flex flex-col max-sm:gap-5 text-center">
        <p className="absolute left-5 max-sm:static">Logo</p>
        <div>
          <h1 className="text-2xl font-semibold pb-3 ">Make Payment</h1>
          <p>Step 2</p>
        </div>
        <progress
          className="progress progress-success  w-full absolute bottom-0"
          value={80}
          max="100"
        ></progress>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <div className="z-[1] w-full lg:w-1/2 flex flex-col items-center   gap-5 lg:p-8 bg-saltpan-50 p-5 rounded-md shadow-lg ">
          <h1 className="text-xl font-medium self-start">Payment Methods</h1>
          {/* toggle payment option*/}
          <div className="flex bg-gray-200 p-1 shadow-lg rounded-md w-full">
            <p
              className={`w-1/2 text-center cursor-pointer ${
                crypto
                  ? "bg-primary text-white p-3 rounded-md"
                  : "bg-transparent text-black p-3"
              }`}
              onClick={() => {
                setCrypto(true);
              }}
            >
              USDT Tether
            </p>
            <p
              className={`w-1/2 text-center cursor-pointer ${
                !crypto
                  ? "bg-primary text-white p-3 rounded-md"
                  : "bg-transparent text-black p-3"
              }`}
              onClick={() => {
                setCrypto(false);
              }}
            >
              ACH Transfer
            </p>
          </div>
          {/* Payment Cards*/}
          {crypto && (
            <div className="flex   flex-row-reverse max-sm:flex-col w-full max-sm:gap-1 justify-center gap-10  items-center">
              <div className="w-full">
                <p className="font-medium">USDT Address (ERC-20)</p>
                <p className="bg-blue-50 cursor-pointer mt-3 w-full flex  items-center justify-between text-start rounded-md  p-3">
                  0x1d6A91643e8eC808a631e <br /> A407549E47d1A8A95b2
                  <CopyToClipboard text="0x1d6A91643e8eC808a631eA407549E47d1A8A95b2" onCopy={()=>{
                    setTimeout(()=>{setIsCopied(false)},1000)
                    setIsCopied(true)
                  }}>
                    <IoCopyOutline size={isCopied?25:20} color={isCopied?"green":"black"} />
                  </CopyToClipboard>
                </p>
              </div>
              {/* <p className="font-semibold">OR</p>
              <div>
                <p className="mb-3">Scan barcode to pay</p>
                <div className="h-[200px] w-[200px] bg-saltpan-200 rounded-md"></div>
              </div> */}
            </div>
          )}
          {!crypto && (
            <div className="w-full flex flex-col gap-5">
              <div className="flex w-full justify-between">
                <p>Bank Name</p>
                <p className="flex gap-3 items-center">
                  Name of bank <IoCopyOutline size={15} />
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p>Bank Number</p>
                <p className="flex gap-3 items-center">
                  00000000 <IoCopyOutline size={15} />
                </p>
              </div>
              <div className="flex w-full justify-between">
                <p>Bank Name</p>
                <p className="flex gap-3 items-center">
                  Name of bank <IoCopyOutline size={15} />
                </p>
              </div>
            </div>
          )}
          <FieldSet
            label={"Upload reciept"}
            required={true}
            type={"file"}
            state={reciept}
            setState={setReciept}
          />
          <div className="z-[1] px-1 flex w-full text-[.8rem] mt-5 max-sm:gap-5 justify-end gap-5">
            <Link
              className="text-black text-center z-[1] bg-gray-200 w-1/3 max-sm:w-1/2 lg:p-2 p-3 rounded-md"
              to={"/users/payment/checkout"}
              state={location.state}
            >
              Back
            </Link>
            <button
              onClick={async () => {
                let form = new FormData();
                if (!reciept) {
                  alert("upload image");
                } else {
                  form.append("amount", location.state.amount);
                  form.append("inv_type", location.state.inv_type);
                  form.append("frequency_type", location.state.frequency);
                  form.append("image", reciept);
                  form.append("confirmed", false);
                  await createInvestment(form)
                    .then((data) => useLoader.setState({ loader: false }))
                    .catch((e) => {
                      useLoader.setState({ loader: false });
                      useModal.setState({ modal: true });
                    });
                  navigate("/users/payment/success");
                }
              }}
              to={"/users/payment/success"}
              className="text-black z-[1] bg-secondary w-1/3 max-sm:w-1/2 text-center p-3 lg:p-2 rounded-md "
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
