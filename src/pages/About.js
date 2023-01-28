import React from 'react';
import Team from '../data/TeamInfo';

// JSX for styles
const textStyle ="text-justify px-10";
const titleStyle ="text-4xl font-semibold mb-8 pt-20 text-center";

const About = () => {
  return(
    <div className='max-w-screen-xl mx-auto my-28'>
      <section>
        <h2 className={titleStyle} >About Iranian supportive organization (ISO)</h2>
        <p className={textStyle} >Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
        <p className={textStyle} >Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        <p className={textStyle} >Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
      </section>
      <section>
        <h2 className={titleStyle} >Our Story</h2>
        <p className={textStyle} >Sed porttitor lectus nibh. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
        <p className={textStyle} >Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
      </section>
      <section>
        <h2 className={titleStyle} >The Team</h2>
        <div className='flex flex-wrap items-center justify-center'>
            {Team.map((item)=>{
                const {id , name , position , image} = item;
                return(
                    <div key={id} className="w-80 h-96 p-6 m-6 text-center bg-persian-indigo-50 flex flex-col justify-between items-center">
                      <img src={image} alt={name +"/" + position} 
                        className="w-56 h-56 rounded-full" />
                      <h2 className='text-lg'>{name}</h2>
                      <p className='text-xs '>{position}</p>                     
                    </div>
                )
            })}
        </div>
      </section>
    </div>
  );
  };
  
export default About;