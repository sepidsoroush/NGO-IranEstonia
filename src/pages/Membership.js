import { useState } from 'react';
import axios from 'axios';

// JSX for styles
const inputStyle ="border border-solid border-gray-300 rounded w-72 h-10 pl-2 my-1 ml-3";
const checkBox ="my-3 mr-3";
const labelStyle ="text-gray-600";

const Membership = () => {
  const activities =[
    {index :1 , name : 'software' , label : 'IT & Software'},
    {index :2 , name : 'translation' , label : 'Translation'},
    {index :3 , name : 'editing' , label :'Graphic & Video Editing'},
    {index :4 , name : 'art' , label :'Art & Culture'},
    {index :5 , name : 'media' , label :'Social Media'},
    {index :6 , name : 'legal' , label :'Legal'},
    {index :7 , name : 'administrative' , label :'Administrative & HR'},
    {index :8 , name : 'journalism' , label :'Journalism'},
    {index :9 , name : 'other' , label :'Other'}];
  const [inputs, setInputs] = useState({});
  const [activity,setActivity] = useState([false,false,false,false,false,false,false,false,false]);
  const [isloading , setIsloading] =useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleCheckbox = (position) => {
    const updatedCheckbox = activity.map((item,index)=> index === position ? !item :item)
    setActivity(updatedCheckbox)
  }
  console.log(activity);
  const handleSubmit = (event) => {
    setIsloading(true);
    event.preventDefault();
    axios.post('https://iso-backend.herokuapp.com/user',{inputs:inputs,activity:activities}).then(
      (res)=>{console.log(res);
        setIsloading(false)}
    ).catch(
      (err)=>{console.log(err);
        setIsloading(false)}
    );
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
              required
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
              required
              className={inputStyle}
            />
          </label>
          
          <p className='mb-2 mt-6 font-semibold'>Fields of volunteer collaboration</p>
          <ul>
            {activities.map(({name , label} ,index)=>{
              return(
                <li key={index}>
                  <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={name}
                  value={name}
                  className={checkBox}
                  checked={activity[index]}
                  onChange={()=>handleCheckbox(index)} />
                  <label
                  htmlFor={`checkbox-${index}`}
                  className={labelStyle}
                  >{label}</label>
                </li>
              )
            })}
          </ul>

          <div className='flex justify-center items-center'>
            <input 
              type='submit'
              value={isloading ? 'Submiting...' : 'Submit'}
              onClick={handleSubmit} 
              className="rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700  w-32 px-4 py-2 mt-8"
              disabled={isloading}
            />
          </div>
        </form>
      </div>
    );
  };
  
  export default Membership;