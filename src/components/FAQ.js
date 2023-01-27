import {useState } from 'react';
import { UilMinus , UilPlus } from '@iconscout/react-unicons';

const FAQ = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <article >
        <header className='hover:bg-gray-100 my-2 py-2 max-w-xl '>
          <button className='text-left' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <UilMinus className="inline-block mr-2" /> : <UilPlus className="inline-block mr-2" /> }<span>{title}</span>
          </button>
        </header>
        {showInfo && <p className='my-3 text-persian-indigo-700 ml-9'>{info}</p>}
      </article>
    );
  };

export default FAQ;
