import React from 'react';

// JSX for styles
const textStyle ="text-justify px-10";
const titleStyle ="text-4xl font-semibold mb-8 pt-20 text-center";

const AboutUs = () => {
  return(
    <div>
      <h2 className={titleStyle} >About Iranian supportive organization (ISO)</h2>
        <p className={textStyle} >Our main vision is to support the Iranian community and promote its social position in Estonia and abroad. We aim to provide opportunities for members of the community to participate in various social activities that benefit them and bring them together.</p>
        {/* <p className={textStyle} >Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        <p className={textStyle} >Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p> */}
    </div>
  );
  };
  const OurStory = () => {
    return(
      <div>
        <h2 className={titleStyle} >Our Story</h2>
        <p className={textStyle} >Since the brutal death of Mahsa Amini in September 2022 and before the establishment of the NPO, the members of the Iranian Supportive Organization have also been active in social media, using platforms like Twitter, Facebook, and Instagram to reach a wider audience. They have been posting regular updates and stories about the situation in Iran, providing a firsthand account of what is happening on the ground. They have also been working with each other to create a network of support and advocacy for the Iranian people in a campaign called “Free Iran”.</p>
        <p className={textStyle} >We were committed to giving a voice to the people of Iran. We felt that the Iranian people were not being heard and their voices were not being represented in the international arena, and we have been actively participating in various activities to raise awareness and bring attention to the cause.</p>
      </div>
    );
    };  
  
export  {AboutUs , OurStory};