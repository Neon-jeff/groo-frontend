import React from 'react'
import { useModal } from '../../data/store';

export default function Modal({text,showclose=true}) {
    let {modal,hideModal}=useModal(state=>state)
    if(modal){
          return (
            <div className="fixed bg-[rgb(0,0,0,.8)] z-[3] flex items-center justify-center top-0 w-screen h-screen left-0">
              {/* Modal Element */}

              <div className="bg-dash w-1/2 max-sm:w-full  rounded-lg p-10 flex flex-col items-center justify-center gap-5">
                <p>
                  {text}
                </p>
                {showclose && (
                  <button className="bg-saltpan-200 self-end p-3 border-[1px] border-black w-1/4 max-sm:w-1/3 rounded-lg" onClick={()=>{hideModal()}}>
                    close
                  </button>
                )}
              </div>
            </div>
          );
    }
}

