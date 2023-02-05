import React from 'react';
import { Helmet } from 'react-helmet-async';
import Team from '../components/Team';
import  {AboutUs, OurStory } from '../components/AboutUs';

const About = () => {
  return(
    <div className='md:max-w-6xl mx-auto my-28'>
      <Helmet>
        <title>About - ISO</title>
        <meta name='description' content='about ISO organization'/>
      </Helmet>
      <AboutUs />
      <OurStory />
      <Team />      
    </div>
  );
  };
  
export default About;