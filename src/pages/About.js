import React from 'react';
import Team from '../components/Team';
import  {AboutUs, OurStory } from '../components/AboutUs';

const About = () => {
  return(
    <div className='max-w-screen-xl mx-auto my-28'>
      <AboutUs />
      <OurStory />
      <Team />
    </div>
  );
  };
  
export default About;