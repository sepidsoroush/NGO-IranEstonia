import { useState} from "react";
import { Link } from "react-router-dom";
import { UilCheckCircle } from '@iconscout/react-unicons';

export default function Modal() {
  const [closeModal, setCloseModal] = useState(true);
  return (
    <div>
      {closeModal ? (
        <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 flex flex-col justify-center items-center">
                <UilCheckCircle className='text-emerald-700 text-center' />
                <p className="my-4 text-slate-700 text-lg leading-relaxed">
                Thank you for your participation. Your request submitted. 
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-6  rounded-b">
                <button
                  className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setCloseModal(false)}
                >
                  Close
                </button>
                <Link
                  to={'/'}
                  className="bg-white text-persian-indigo-700 font-bold uppercase text-sm outline-none focus:outline-none px-6 py-3 rounded shadow hover:shadow-lg  mr-1 mb-1 ease-linear border border-persian-indigo-700 transition-all duration-150"
                >
                  Go back to Home page
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>  
      ) : null}
    </div>
  );
}