import React, { useState } from 'react'
import FieldSet from '../../components/AuthComponents/fieldSet'
import ButtonAuth from '../../components/buttons/buttonLogin';
import logo from "../../assets/images/logo-color.svg";
import { Link } from 'react-router-dom';
import { userStore } from '../../data/store';
import Modal from '../../components/Modal/modal';
import { useModal } from '../../data/store';
import withdrawFunds from '../../data/withdraw';
import Loader from '../../components/Modal/modalLoader';
import { MdError } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function WithdrawPage() {
  let [bank_name,setBankName]=useState('')
  let [bank_number, setBankNum] = useState("");
  let [bank_address, setBankAddress] = useState("");
  let [acc_number, setAccountNumber] = useState("");
  let [wallet, setWallet] = useState("");
  let [crypto, setCrypto] = useState(true);
  let [amount,setAmount]=useState(0)

  let {profile}=userStore(state=>state.user)
  return (
    <div class="h-screen flex flex-col justify-center items-center bg-dash text-sm">
      <Modal text={"Insufficient balance for withdrawal"} />
      <Loader/>
      {/* Withdrwal form */}
      <Link to={"/users/dashboard"}>
        <img src={logo} alt="" className="h-[70px] max-sm:h-[50px] pl-5" />
      </Link>
      <form
        action=""
        method="post"
        className=" p-5 w-1/3 max-sm:w-full  rounded-md shadow-md"
        onSubmit={async (e) => {
          e.preventDefault();
          if(amount>profile.balance){
              useModal.setState({modal:true})
          }
          let data = {
            amount,
            bank_name,
            bank_number,
            bank_address,
            acc_number,
          };
          if (!crypto) {
            data = {
              amount,
              wallet_address: wallet,
            };
          }
          withdrawFunds(data)
          // let data = { email: bank_name, password: password };
          // await login(data);
        }}
      >
        <h1 className="text-xl font-semibold text-start pb-4">
          Withdraw from your balance
        </h1>
        {/* Withdrawal type toggle */}
        <p className="mb-2 font-semibold">
          Current Balance: ${profile.balance}
        </p>
        <div className="flex bg-saltpan-100 p-1  rounded-md w-full">
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
            Bank Transfer
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
            USDT Transfer
          </p>
        </div>
        {/* Names container */}
        <div
          className={
            crypto
              ? "w-full grid grid-cols-2 gap-3 mt-5"
              : "mt-5 flex flex-col gap-3"
          }
        >
          <FieldSet
            label={"Amount(USD)"}
            type={"number"}
            name={"amount"}
            state={amount}
            setState={setAmount}
            placeholder="amount"
          />
          {crypto && (
            <>
              <FieldSet
                label={"Bank Name"}
                type={"text"}
                name={"bank_name"}
                state={bank_name}
                setState={setBankName}
              />
              <FieldSet
                label={"Routing Number"}
                type={"text"}
                name={"bank_number"}
                state={bank_number}
                setState={setBankNum}
              />

              <FieldSet
                label={"Account Number"}
                type={"text"}
                name={"bank_number"}
                state={acc_number}
                setState={setAccountNumber}
              />

              <FieldSet
                label={"Bank Address"}
                type={"text"}
                name={"bank_address"}
                state={bank_address}
                setState={setBankAddress}
              />
            </>
          )}

          {!crypto && (
            <>
              <FieldSet
                label={"USDT(ERC-20)"}
                placeholder="usdt address"
                type={"text"}
                name={"wallet_address"}
                state={wallet}
                setState={setWallet}
              />
            </>
          )}

          <ButtonAuth text="Withdraw" />
        </div>
      </form>
    </div>
  );
}

