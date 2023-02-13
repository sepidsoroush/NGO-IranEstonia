import React from 'react';
import { Link } from 'react-router-dom';
import EventsInfo from '../data/EventsInfo';


const PastEvent = () => {
    const Past = EventsInfo.filter((item) => item.type === "Past Events");  
    return (
        <div className='max-w-7xl mx-auto justify-start'>
            <h1 className=" text-4xl font-semibold mb-8 pt-20 text-center">Past Events</h1>
            <div className='flex flex-col-reverse '>
                {Past.map((item)=>{
                const {id , title , description , poster , date} = item;
                return(
                    <div 
                    key={id}
                    className='p-6 flex flex-col sm:flex-row items-center' >
                        <img src={poster} alt="poster" className='w-64 h-64 border border-gray-200 object-scale-down flex justify-center items-center shadow-md' />
                        <div className='flex flex-col sm:pl-5 pl-0 pt-3 sm:pt-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl items-center sm:items-start'>
                            <p className='text-xs pb-1 text-gray-600'>{date}</p>
                            <h2 className='text-lg font-bold'>{title}</h2>
                            <p className=' py-4 w-full'>{description}</p>
                            <Link to={`/events/${id}`} className='text-persian-indigo-700 border border-persian-indigo-100  transition duration-500 ease-in-out py-2 rounded w-24 text-center text-sm font-medium  shadow-md hover:shadow-xl active:shadow-xl'>Read more</Link>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PastEvent;