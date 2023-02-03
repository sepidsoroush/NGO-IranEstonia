import { useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [message, setMessage] = useState({});
  const [isloading , setIsloading] =useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMessage(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    setIsloading(true);
    event.preventDefault();
    axios.post('https://iso-backend.herokuapp.com/contact',message).then(
      (res)=>{console.log(res);
        setIsloading(false)}
    ).catch(
      (err)=>{console.log(err);
        setIsloading(false)}
    );
  }
  return(
    <div>
        <form action="" className=" flex flex-col items-center text-sm">
          <input
          type="name"
          name='userName'
          value={message.userName || ''}
          onChange={handleChange}
          placeholder="Name" 
          required 
          className="border border-solid divide-gray-300 w-96 h-10 pl-2 my-1"/>
          <input 
          type="email" 
          name='userEmail'
          value={message.userEmail || ""}
          onChange={handleChange}
          placeholder="Email Address" 
          required
          className="border border-solid divide-gray-300 w-96 h-10 pl-2 my-1"/>
          <input 
          type="textarea"
          name='userMessage'
          value={message.userMessage || ""}
          onChange={handleChange} 
          placeholder="Your Message" 
          required
          className="border border-solid divide-gray-300 w-96 h-36 pl-2 my-1"/>
          <input 
          type="submit"
          value={isloading ? 'Submiting...' : 'Send Message'}
          onClick={handleSubmit}  
          className='rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700 w-34 px-4 py-2 mt-8 text-base active:scale-90'/>
        </form>
    </div>
  );
  };
  
export default Message;