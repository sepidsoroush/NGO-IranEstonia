import {React } from 'react';

// JSX for styles
const textStyle =" px-10";
const titleStyle ="text-3xl font-semibold mb-8 pt-20 text-center";
const AboutUs = () => {
  const text = 'The Iranian Supportive Organization (ISO) is a newly formed NGO based in Estonia dedicated to promoting the Iranian culture and supporting Iranians, especially newcomers and students, who reside in Estonia. ISO recognizes the challenges and is committed to providing resources and support to help Iranians integrate into Estonian society. Through a range of programs and services including social and cultural events, ISO aims to create a sense of community and belonging among Iranians in Estonia. The formation of ISO marks a significant step forward in promoting cultural exchange and understanding between different groups in Estonian society. By fostering a supportive environment for Iranians, ISO hopes to bridge cultural gaps and create a more inclusive community for all. We believe that the Iranian community in Estonia will be strengthened even further by the formation of ISO and the positive impact it will have on the lives of individuals.'
  return(
    <div>
      <h2 className={titleStyle} >About Iranian supportive organization (ISO)</h2>
        <h6 className={textStyle}>
          {text}
        </h6>
    </div>
  );
  };
  const OurStory = () => {
    const text = 'We are a diverse group of independent individuals who came together with a shared vision of improving the lives of Iranians in Estonia. We are not affiliated with any political party or specific group, and our mission is driven purely by our desire to support our community. Through our interactions with the Iranian community in Estonia, we realized that there was a lack of representation and support for Iranians. Despite the numerous resources and services provided by the country to help newcomers settle, it often takes months for individuals to find and access these resources.  In response to this challenge, we decided to form an NGO dedicated to promoting Iranian culture and supporting Iranians. Our goal is to provide a comprehensive range of programs and support services that can help Iranians integrate into Estonian society and improve their quality of life. We are excited about the potential impact of ISO and are committed to working tirelessly to achieve our goals. We hope that through our efforts, we can create a more inclusive and supportive environment for Iranians in Estonia.'

    return(
      <div>
        <h2 className={titleStyle} >Our Story</h2>
        <h6 className={textStyle}>{text}</h6>
      </div>
    );
    };  
  
export  {AboutUs , OurStory};