import { useState } from 'react';
import axios from 'axios';

// JSX for styles
const inputStyle ="border border-solid border-gray-300 rounded w-72 h-10 pl-2 my-1 ml-3";
const checkBox ="my-3 mr-3";
const labelStyle ="text-gray-600";

const Membership = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://iso-backend.herokuapp.com/',inputs);
  }
    return (
      <div className="mb-28 mt-40 flex flex-col justify-center items-center max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold my-8">Become a member of ISO</h1>
        <form action="" className='flex flex-col'>
          <label htmlFor="name">Enter your name
            <input
              type="text"
              id="name"
              name='userName'
              value={inputs.userName || ""}
              onChange={handleChange}
              required="required"
              className={inputStyle}
            />
          </label>
          <label htmlFor="email">Enter your email
            <input
              type="email"
              id="email"
              name='userEmail'
              value={inputs.userEmail || ""}
              onChange={handleChange}
              required="required"
              className={inputStyle}
            />
          </label>
          
          <p className='mb-2 mt-6 font-semibold'>Fields of volunteer collaboration</p>
          <div>
            <input 
                type="checkbox" 
                id='software'
                name='software'
                value={inputs.software}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="software" className={labelStyle}>IT & Software</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='translation'
                name='translation'
                value={inputs.translation}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="translation" className={labelStyle}>Translation</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='editing'
                name='editing'
                value={inputs.editing}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="editing" className={labelStyle}>Graphic & Video Editing</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='art'
                name='art'
                value={inputs.art}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="art" className={labelStyle}>Art & Culture</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='media'
                name='media'
                value={inputs.media}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="media" className={labelStyle}>Social Media</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='legal'
                name='legal'
                value={inputs.legal}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="legal" className={labelStyle}>Legal</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='administrative'
                name='administrative'
                value={inputs.administrative}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="administrative" className={labelStyle}>Administrative & HR</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='journalism'
                name='journalism'
                value={inputs.journalism}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="journalism" className={labelStyle}>Journalism</label>
          </div>

          <div>
            <input 
                type="checkbox" 
                id='other'
                name='other'
                value={inputs.other}
                onChange={handleChange}
                className={checkBox}
                />
            <label htmlFor="other" className={labelStyle}>Other</label>
          </div>

          <div className='flex justify-center items-center'>
            <input 
              type="submit"
              onClick={handleSubmit} 
              className="rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700  w-24 px-4 py-2 mt-8"
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default Membership;