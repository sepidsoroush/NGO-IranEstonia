import { Helmet } from 'react-helmet-async';
import { UilLock } from '@iconscout/react-unicons';
import FAQ from "../components/FAQ";
import FaqInfo from "../data/FaqInfo";

const Donate = () => {
    return (
      <div className='mt-28 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl flex flex-col mx-auto'>
        <Helmet>
          <title>Donate - ISO</title>
          <meta name='description' content='Donation to ISO organization'/>
        </Helmet>
        <h1 className='text-4xl py-6 text-center'>Help us do more</h1>
        <div className='px-10 leading-loose text-justify'>
          <p>Our main vision is to support the Iranian community and promote its social position in Estonia and abroad. We aim to provide opportunities for members of the community to participate in various social activities that benefit them and bring them together.</p>
          <p>Donations will be used to fund the various activities and programs that we organize to achieve our mission and vision. This includes cultural events, political discussions, social gatherings, and other initiatives that bring the community together and help it thrive.</p>
          
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
          <h3 className='border-t border-gray-200 py-6 text-2xl font-bold text-center' >Questions and Answers about Donation</h3>
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