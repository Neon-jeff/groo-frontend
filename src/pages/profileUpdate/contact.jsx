import React from 'react'
import FieldSet from '../../components/AuthComponents/fieldSet';

export default function Contact() {
  return (
    <div className=" flex flex-col gap-10 items-center justify-center text-sm pb-10 bg-[#f8f9fa] ">
      <div className="fixed left-0 bottom-0 w-full bg-primary h-1/2 max-sm:h-1/2 "></div>
      <div className=" p-10 shadow-lg w-full max-sm:px-5 justify-center flex flex-col max-sm:gap-5 text-center">
        <p className="absolute left-5 max-sm:static">Logo</p>
        <div>
          <h1 className="text-2xl font-semibold pb-3 max-sm:pb-0">
            Add Contact Info
          </h1>
          <p>How can we reach you</p>
        </div>
      </div>
      <div className="flex w-full justify-center max-sm:px-5 gap-10 max-sm:mt-5 ">
        <form
          action=""
          method="post"
          className="z-[1] w-full lg:w-1/3 lg:grid lg:grid-cols-2 grid grid-cols-2 gap-3 lg:p-10 bg-dash p-5 rounded-md shadow-lg "
        >
          <FieldSet label={"Phone"} type={"tel"} name={"phone"} />
          <FieldSet label={"Alternate Phone"} type={"tel"} name={"phone"} />
          <FieldSet label={"Address Line"} type={"text"} name={"address"} />
          <FieldSet label={"State"} type={"text"} name={"text"} />
          <FieldSet label={"Zip Code"} type={"text"} name={"text"} />

        </form>
      </div>

      <button className="text-black z-[1] bg-secondary w-1/4 max-sm:w-1/2 p-5 rounded-md ">
        Next
      </button>
    </div>
  );
}

