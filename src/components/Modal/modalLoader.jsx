import React from "react";
import { useLoader } from "../../data/store";

export default function Loader({ text, showclose = false }) {
  let { loader, hideLoader } = useLoader((state) => state);
  if (loader) {
    return (
      <div className="fixed bg-[rgb(0,0,0,.8)] z-[3] flex items-center justify-center top-0 w-screen h-screen left-0">
        {/* Modal Element */}

        <div className="bg-dash w-1/4 max-sm:w-3/5 text-lime-600  rounded-lg p-10 flex flex-col items-center justify-center gap-5">
          Processing... <span className="loading loading-ring loading-lg"></span>
          {/* {!showclose && (
            <button
              className="bg-saltpan-200 self-end p-3 border-[1px] border-black w-1/4 max-sm:w-11/12 rounded-lg"
              onClick={() => {
                hideModal();
              }}
            >
              close
            </button>
          )} */}
        </div>
      </div>
    );
  }
}
