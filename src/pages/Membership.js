import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// JSX for styles
const inputStyle =
  'border border-solid border-gray-300 rounded  w-72 h-10 pl-2 my-1';
const checkBox = 'my-3 mr-3';
const labelStyle = 'text-gray-700';
const errorStyle ='text-sm text-red-700 mb-4'

const validation = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userEmail: Yup.string().email('Invalid email').required('Required'),
  activities: Yup.array().required('Required'),
});

const Membership = () => {
  const activities = [
    { index: 1, name: 'software', label: 'IT & Software' },
    { index: 2, name: 'translation', label: 'Translation' },
    { index: 3, name: 'editing', label: 'Graphic & Video Editing' },
    { index: 4, name: 'art', label: 'Art & Culture' },
    { index: 5, name: 'media', label: 'Social Media' },
    { index: 6, name: 'legal', label: 'Legal' },
    { index: 7, name: 'administrative', label: 'Administrative & HR' },
    { index: 8, name: 'journalism', label: 'Journalism' },
    { index: 9, name: 'other', label: 'Other' },
  ];
  const [inputs, setInputs] = useState({});
  const [activity, setActivity] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isloading, setIsloading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCheckbox = (position) => {
    const updatedCheckbox = activity.map((item, index) =>
      index === position ? !item : item
    );
    setActivity(updatedCheckbox);
  };

  return (
    <div className="mb-28 mt-40 flex flex-col justify-center items-center max-w-screen-xl mx-auto">
      <Helmet>
        <title>Membership - ISO</title>
        <meta
          name="description"
          content="Become a member of ISO organization"
        />
      </Helmet>
      <h1 className="text-2xl font-semibold my-8">Become a member of ISO</h1>
      <Formik
        validationSchema={validation}
        initialValues={{
          userName: '',
          userEmail: '',
          activities: [],
        }}
        onSubmit={async (values) => {
          axios
            .post('https://iso-backend.herokuapp.com/user', {
              inputs: values,
              activity: activities,
            })
            .then((res) => {
              console.log(res);
              setIsloading(false);
              setShowMessage(true);
            })
            .catch((err) => {
              console.log(err);
              setIsloading(false);
              setShowError(true);
            });
            setInputs({});
            setActivity([false,false,false,false,false,false,false,false,false]);
        }
        
        }>
        {({ errors, touched }) => (
          <Form className="flex flex-col mx-2">
            <label htmlFor="userName" className={labelStyle}>
              Enter Your Name
            </label>
            <Field
              id="userName"
              name="userName"
              placeholder="Name"
              className={inputStyle}
            />
            {errors.userName && touched.userName ? (
              <div className={errorStyle}>{errors.userName}</div>
            ) : null}
            <label htmlFor="userEmail" className={labelStyle}>
              Enter Your Email
            </label>
            <Field
              id="userEmail"
              name="userEmail"
              placeholder="Email"
              type="email"
              className={inputStyle}
            />
            {errors.userEmail && touched.userEmail ? (
              <div className={errorStyle}>{errors.userEmail}</div>
            ) : null}
            <p className='text-gray-700 mt-4 mb-2'>Fields of volunteer collaboration:</p>
            {activities.map((item, index) => (
              <div key={item.index}>
                <input
                  type="checkbox"
                  name={item.name}
                  id={item.name}
                  className={checkBox}
                  checked={activity[index]}
                  onChange={() => handleCheckbox(index)}
                />
                <label htmlFor={item.name} className={labelStyle}>
                  {item.label}
                </label>
                {errors.activities && touched.activities ? (
                  <div>{errors.activities}</div>
                ) : null}
              </div>
            ))}

            <div className='flex justify-center items-center'>
              <button 
              type="submit"
              className="rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700  w-32 px-4 py-2 mt-8 active:scale-90"
              >Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Membership;