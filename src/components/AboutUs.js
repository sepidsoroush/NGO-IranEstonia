import React from 'react';

// JSX for styles
const textStyle ="text-justify px-10";
const titleStyle ="text-4xl font-semibold mb-8 pt-20 text-center";

const AboutUs = () => {
  return(
    <div>
      <h2 className={titleStyle} >About Iranian supportive organization (ISO)</h2>
        <p className={textStyle} >Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
        <p className={textStyle} >Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        <p className={textStyle} >Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
    </div>
  );
  };
  const OurStory = () => {
    return(
      <div>
        <h2 className={titleStyle} >Our Story</h2>
        <p className={textStyle} >Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        <p className={textStyle} >Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
      </div>
    );
    };  
  
export  {AboutUs , OurStory};