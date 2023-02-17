import React from 'react';
import {Helmet} from 'react-helmet-async';
import EventsInfo from '../data/EventsInfo';

const Activities = () => { 
    const activities = EventsInfo.filter((item) => item.type === "Activity"); 
    return (
        <div className='w-screen mt-28 pb-20 flex flex-col'>
            <Helmet>
                <title>Activities - ISO</title>
                <meta name='description' content='Activities of ISO organization'/>
            </Helmet>
            <div className='max-w-7xl mx-auto justify-start'>
            <h1 className=" text-4xl font-semibold mb-8 pt-20 text-center">Our Activities</h1>
            <div className='flex flex-col-reverse '>
                {activities.map((item)=>{
                const {id , title , description , date , link} = item;
                return(
                    <div 
                    key={id}
                    className='p-6 flex flex-col sm:flex-row items-center border-b border-b-gray-200' >
                        <div className='flex flex-col sm:pl-5 pl-0 pt-3 sm:pt-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl items-start '>
                            <p className='text-xs pb-1 text-gray-600'>{date}</p>
                            <h2 className='text-lg font-bold'>{title}</h2>
                            <p className=' py-4 w-full'>{description}</p>
                            {Object.hasOwn(item , 'link')? 
                            <a
                                className='bg-white text-sm shadow-md border border-persian-indigo-50 p-3  rounded active:bg-persian-indigo-50 active:opacity-80 mb-4' 
                                href={link}
                                target='_blank'
                                >Read more about it
                            </a> : null}
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
        </div>
    );
};

export default Activities;