import { useState } from 'react';

const Membership = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
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
            />
          </label>
          
          <p>Select your filed of activity:</p>
          <input 
              type="checkbox" 
              id='check1'
              name='rally'
              value={inputs.rally}
              onChange={handleChange}
              />
          <label htmlFor="check1">Rallies and Events</label>

          <input 
              type="checkbox" 
              id='check2'
              name='media'
              value={inputs.media}
              onChange={handleChange}
              />
          <label htmlFor="check2">Social Media</label>

          <input 
              type="checkbox" 
              id='check3'
              name='financial'
              value={inputs.financial}
              onChange={handleChange}
              />
          <label htmlFor="check3">Financial Support</label>
          <input 
            type="submit"
            onClick={handleSubmit} 
          />
        </form>
      </div>
    );
  };
  
  export default Membership;