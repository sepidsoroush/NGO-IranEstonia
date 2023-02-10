import { useState} from "react";
import { UilExclamationOctagon } from '@iconscout/react-unicons'

export default function Error() {
  const [closeError, setCloseError] = useState(true);
  return (
    <div>
      {closeError ? (
        <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-5"
        >
          <div className="relative w-auto my-6 mx-auto max-w-md">
            {/*content*/}
            <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*body*/}
              <div className="relative p-6 flex flex-col justify-center items-center">
                <UilExclamationOctagon className='text-red-700 text-center items-center justify-center' />
                <p className="mt-4 text-slate-700 text-lg text-center leading-relaxed">
                Oops! Something wasn't right. Please try again.
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-center p-6  rounded-b">
                <button
                  className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setCloseError(false)}
                >
                  Try Again
                </button>
                
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