import React from 'react';
import EventsInfo from '../data/EventsInfo';


const UpcomingEvent = () => {
    const Upcoming = EventsInfo.filter((item) => item.type === "Upcoming Events");  
    return (
        <div className='max-w-7xl mx-auto justify-start'>
            <h1 className=" text-4xl font-semibold pt-20 text-center">Upcoming Events</h1>
            <div className='flex flex-nowrap flex-col-reverse '>
                {Upcoming.map((item)=>{
                const {id , title , description , poster , link , date} = item;
                return(
                    <div 
                    key={id}
                    className='p-6 flex flex-col sm:flex-row items-center ' >
                        <img src={poster} alt="poster" className='w-72 h-72  object-scale-down ' />
                        <div className='flex flex-col sm:pl-5 pl-0 pt-5 sm:pt-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl items-center sm:items-start'>
                            <p className='text-xs pb-1 text-gray-600'>{date}</p>
                            <h2 className='text-lg font-bold'>{title}</h2>
                            <p className=' py-2 text-sm w-full'>{description}</p>
                            <a href={link} target='_blank' rel="noreferrer"
                            className='text-white bg-persian-indigo-700 hover:bg-opacity-90 transition duration-500 ease-in-out py-2 rounded w-24 text-center text-sm shadow-md hover:shadow-xl'>Read more</a>
                            
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default UpcomingEvent;