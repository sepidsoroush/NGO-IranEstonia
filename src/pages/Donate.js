import { UilLock , UilPaypal , UilGoogle } from '@iconscout/react-unicons';
import FAQ from "../components/FAQ";
import FaqInfo from "../data/FaqInfo";
import {useState } from 'react';

const Donate = () => {
  const [questions, setQuestions] = useState(FaqInfo);
    return (
      <div className='mt-28 max-w-screen-xl flex flex-col mx-auto'>
        <h1 className='text-5xl py-6 text-center'>Help us do more</h1>
        <div className='px-10 leading-loose text-lg'>
          <p>Fusce sit amet velit velit. Aliquam id velit malesuada, condimentum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit semper nisl sollicitudin condimentum vitae at felis. Morbi vehicula.</p>
          <p>Pellentesque elementum vel ante sit amet finibus. Donec dapibus ligula eleifend, dictum tortor in, euismod.</p>
        </div>
        <fieldset className='border border-solid border-gray-500 p-3 max-w-screen-sm w-6/12 flex justify-center mx-auto my-10'>
          <legend> <UilLock className="inline-block"/> <span>Secure donation</span></legend>
          <div className='flex flex-col font-bold'>
            <div className='bg-black text-white w-80 h-11 flex items-center justify-center my-1 rounded'>
              <a href="https://pay.google.com/"><UilGoogle className="inline-block"/> Google Pay</a>
            </div>
            <div className='bg-yellow-400 text-white w-80 h-11 flex items-center justify-center my-1 rounded'>
              <a href="https://www.paypal.com/"><UilPaypal className="inline-block"/> PayPal</a>
            </div>
            <div className='bg-red-500 text-white w-80 h-11 flex items-center justify-center my-1 rounded'>
              <a href="https://www.patreon.com/">PATREON</a>
            </div>
          </div>
        </fieldset>

        <div className='felx felx-col justify-center max-w-xl mx-auto my-8'>
          <h3 className='border-t border-gray-200 py-6 text-2xl font-bold text-center'>Questions and Answers about Donation</h3>
          <section >
            {questions.map((question) => {
              return (
                <FAQ key={question.id} {...question}></FAQ>
              );
            })}
          </section>
        </div>
        
      </div>
    );
  };
  
  export default Donate;