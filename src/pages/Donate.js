import { UilLock } from '@iconscout/react-unicons';
import FAQ from "../components/FAQ";
import FaqInfo from "../data/FaqInfo";

const Donate = () => {
    return (
      <div className='mt-28 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl flex flex-col mx-auto'>
        <h1 className='text-4xl py-6 text-center'>Help us do more</h1>
        <div className='px-10 leading-loose text-lg text-justify'>
          <p>Fusce sit amet velit velit. Aliquam id velit malesuada, condimentum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit semper nisl sollicitudin condimentum vitae at felis. Morbi vehicula.</p>
          <p>Pellentesque elementum vel ante sit amet finibus. Donec dapibus ligula eleifend, dictum tortor in, euismod.</p>
        </div>
        <fieldset className='border border-solid border-gray-500 p-3 max-w-screen-sm w-6/12 flex justify-center mx-auto my-10'>
          <legend> <UilLock className="inline-block"/> <span>Secure donation</span></legend>
          <div className='flex flex-col'>
            <form action="https://stripe.com/en-ee/" target='_blank' >
              <input type="text" className='w-full border border-solid border-gray-300 rounded h-10 my-1 pl-4' placeholder='5€' required  />
              <button className='bg-persian-indigo-700 text-white w-80 h-10 flex items-center justify-center my-1  font-bold rounded'>Donate</button>
            </form>
            <div className='flex flex-row justify-center items-center flex-nowrap my-5 w-full'>
              <span className=' border-b-2 w-1/2'></span>
              <p className='inline-block w-full text-center'>Or donate with card</p>
              <span className=' border-b-2 w-1/2 '></span>
            </div>
            <div className='leading-loose'>
              <p>Iranian Supportive Oraganization</p>
              <p>IBAN: EE000000000000000000</p>
              <p>SWIFT/BIC: EEEEEE00</p>
            </div>      
          </div>
        </fieldset>

        <div className='felx felx-col justify-center mx-auto my-8 px-10'>
          <h3 className='border-t border-gray-200 py-6 text-2xl font-bold text-center'>Questions and Answers about Donation</h3>
          <section >
            {FaqInfo.map((question) => {
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