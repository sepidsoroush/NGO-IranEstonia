import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PaymentUnSuccess = () => {
  console.log('PaymentUnSuccess');
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Get the email and name parameters
  const email = params.get('email');
  const name = params.get('name');

  // Access email and name here

  return (
    <>
      {name && email ? (
        <div className="bg-main min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6 font-custom1">
            Payment Unsuccessful
          </h1>
          <p className="text-lg mb-12 font-custom1">Please try again later</p>

          <a
            href="/donate"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Donation
          </a>
        </div>
      ) : // <Navigate to="/" />
      null}
    </>
  );
};

export default PaymentUnSuccess;
