import { useState } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import Error from '../components/Error';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const inputStyle ="border border-solid divide-gray-300 w-80 h-10 pl-2 my-1";
const errorStyle ='text-xs text-red-700 mb-3';
const validation = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userEmail: Yup.string().email('Invalid email').required('Required'),
  userMessage: Yup.string()
  .min(2, 'Too Short!')
  .required('Required'),
});

const Message = () => {
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isloading , setIsloading] =useState(false);

  return(
    <div className='flex flex-col items-center'>
      <Formik
        validationSchema={validation}
        initialValues={{
          userName: '',
          userEmail: '',
          userMessage: '',
        }}
        onSubmit={async (values , {resetForm}) => {
          setIsloading(true);
          axios
            .post('https://iso-backend.herokuapp.com/contact', {
              values,
            })
            .then((res) => {
              // console.log(res);
              setIsloading(false);
              setShowModal(true);
            })
            .catch((err) => {
              // console.log(err);
              setIsloading(false);
              setShowError(true);
            });
            resetForm();
        }
        
        }>
        {({ errors, touched }) => (
          <Form className=" flex flex-col text-sm mx-2">
            <Field
              id="userName"
              name="userName"
              placeholder="Name"
              className={inputStyle}
            />
            {errors.userName && touched.userName ? (
              <div className={errorStyle}>{errors.userName}</div>
            ) : null}

            <Field
              id="userEmail"
              name="userEmail"
              placeholder="Email Address"
              type="email"
              className={inputStyle}
            />
            {errors.userEmail && touched.userEmail ? (
              <div className={errorStyle}>{errors.userEmail}</div>
            ) : null}
            
            <Field
              id="userMessage"
              name="userMessage"
              placeholder="Your Message"
              as='textarea'
              className="border border-solid  divide-gray-300 w-80 h-36 pl-2 pt-2 my-1 break-words"
            />
            {errors.userMessage && touched.userMessage ? (
              <div className={errorStyle}>{errors.userMessage}</div>
            ) : null}
            <div className='flex justify-center items-center'>
              <button
               
              type="submit"
              className="rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700  w-32 px-4 py-2 mt-8 active:scale-90 active:bg-persian-indigo-50 shadow hover:shadow-lg "
              >{isloading ? "Submiting..." : "Submit" }</button>
            </div>
          </Form>
        )}
      </Formik>
        {/* <form action="" className=" flex flex-col items-center text-sm mx-2">
          <input
          type="name"
          name='userName'
          value={message.userName || ''}
          onChange={handleChange}
          placeholder="Name" 
          required 
          className="border border-solid divide-gray-300 w-80 h-10 pl-2 my-1"/>
          <input 
          type="email" 
          name='userEmail'
          value={message.userEmail || ""}
          onChange={handleChange}
          placeholder="Email Address" 
          required
          className="border border-solid divide-gray-300 w-80 h-10 pl-2 my-1"/>
          <textarea 
          
          name='userMessage'
          value={message.userMessage || ""}
          onChange={handleChange} 
          placeholder="Your Message" 
          required
          className="border border-solid  divide-gray-300 w-80 h-36 pl-2 pt-2 my-1 break-words"/>
          <input 
          type="submit"
          value={isloading ? 'Submiting...' : 'Send Message'}
          onClick={handleSubmit}  
          className='rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700 w-34 px-4 py-2 mt-8 text-base active:scale-90'/>
        </form> */}
        <div>{showModal ? <Modal /> : null}</div>
        <div>{showError ? <Error /> : null}</div>
    </div>
  );
  };
  
export default Message;