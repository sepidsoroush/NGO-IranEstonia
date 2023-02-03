import React from 'react';
import EventsInfo from '../data/EventsInfo';


const UpcomingEvent = () => {
    const Upcoming = EventsInfo.filter((item) => item.type === "Upcoming Events");  
    return (
        <div className='max-w-7xl mx-auto justify-start'>
            <h1 className=" text-4xl font-semibold mb-8 pt-20 text-center">Upcoming Events</h1>
            <div className='flex flex-nowrap flex-col-reverse '>
                {Upcoming.map((item)=>{
                const {id , title , description , poster , link} = item;
                return(
                    <div 
                    key={id}
                    className='p-6 flex flex-col sm:flex-row items-center my-5' >
                        <img src={poster} alt="poster" className='w-72 h-72 ' />
                        <div className='flex flex-col sm:pl-5 pl-0 pt-5 sm:pt-0 max-w-xs sm:max-w-xl items-center sm:items-start'>
                            <h2 className='text-lg font-bold'>{title}</h2>
                            <p className=' py-2 text-sm w-full'>{description}</p>
                            <a href={link} target='_blank' rel="noreferrer"
                            className='text-white bg-persian-indigo-800 hover:bg-opacity-80 transition duration-500 ease-in-out py-2 rounded w-24 text-center text-sm'>Read more</a>
                            
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default UpcomingEvent;