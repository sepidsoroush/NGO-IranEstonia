import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Get the email and name parameters
  const email = params.get('email');
  const name = params.get('name');

  return (
    <>
      {name && email ? (
        <div className="bg-main min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-6">
            Dear {name}, Thank you for your donation
          </h1>

          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Homepage
          </a>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default PaymentSuccess;
