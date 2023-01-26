import React from 'react';
import { Link } from 'react-router-dom';
import EventsInfo from '../data/EventsInfo';

const Events = () => {
    const Upcoming = EventsInfo.filter((item) => item.type === "Upcoming Events");
    const Past = EventsInfo.filter((item) => item.type === "Past Events");  
    return (
        <div className='w-screen h-screen mt-28'>
            <div className='flex flex-col items-center justify-center'>
                <section className=''>
                    <p className='text-5xl text-center my-8'>Upcoming Events</p>
                    <div className='flex flex-row'>
                    {Upcoming.map((item)=>{
                        const {id , title , description} = item;
                        return(
                            <div key={id}>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <Link to={`/events/${id}`} >Learn more</Link>
                            </div>
                        )
                    })}
                    </div>
                </section>
                <section>
                    <p className='text-5xl text-center my-4'>Past Events</p>
                    <div className='flex flex-row'>
                    {Past.map((item)=>{
                        const {id , title , description} = item;
                        return(
                            <div key={id}>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <Link to={`/events/${id}`}>Learn more</Link>
                            </div>
                        )
                    })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Events;