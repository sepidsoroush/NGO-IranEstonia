import {useState } from 'react';
import { UilMinus , UilPlus } from '@iconscout/react-unicons';

const FAQ = ({ title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <article >
        <header>
          <h4>{title}</h4>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <UilMinus /> : <UilPlus />}
          </button>
        </header>
        {showInfo && <p>{info}</p>}
      </article>
    );
  };

export default FAQ;
