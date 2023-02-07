import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import axios from 'axios';
import { UilCheck, UilExclamationOctagon } from '@iconscout/react-unicons';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// JSX for styles
const inputStyle =
  'border border-solid border-gray-300 rounded  w-72 h-10 pl-2 my-1 ml-3';
const checkBox = 'my-3 mr-3';
const labelStyle = 'text-gray-600';
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

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleCheckbox = (position) => {
    const updatedCheckbox = activity.map((item, index) =>
      index === position ? !item : item
    );
    setActivity(updatedCheckbox);
  };

  const handleSubmit = (event) => {
    setIsloading(true);
    event.preventDefault();
    axios
      .post('https://iso-backend.herokuapp.com/user', {
        inputs: inputs,
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
    setActivity([
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
        }}>
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <label htmlFor="userName" className={labelStyle}>
              Name
            </label>
            <Field
              id="userName"
              name="userName"
              placeholder="Name"
              className={inputStyle}
            />
            {errors.userName && touched.userName ? (
              <div>{errors.userName}</div>
            ) : null}
            <label htmlFor="userEmail" className={labelStyle}>
              Email
            </label>
            <Field
              id="userEmail"
              name="userEmail"
              placeholder="Email"
              type="email"
              className={inputStyle}
            />
            {errors.userEmail && touched.userEmail ? (
              <div>{errors.userEmail}</div>
            ) : null}
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

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Membership;