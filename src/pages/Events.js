import React from 'react';
import { Link } from 'react-router-dom';
import EventsInfo from '../data/EventsInfo';

// JSX for styles
const titleStyle ="text-4xl font-semibold mb-8 pt-20 text-center";
const sectionStyle = 'flex flex-wrap flex-row-reverse items-center justify-center ';
const postStyle = 'w-80 h-96 p-6 m-6 text-center bg-indigo-50 flex flex-col justify-around items-center rounded';
const postTitle ='text-lg font-bold';
const linkStyle ='hover:bg-persian-indigo-700 hover:bg-opacity-30 transition duration-500 ease-in-out px-4 py-2 rounded';

const Events = () => {
    const Upcoming = EventsInfo.filter((item) => item.type === "Upcoming Events");
    const Past = EventsInfo.filter((item) => item.type === "Past Events");  
    return (
        <div className='w-screen mt-28 flex flex-col items-center justify-center'>
            <section>
                <h1 className={titleStyle}>Upcoming Events</h1>
                <div className={sectionStyle}>
                    {Upcoming.map((item)=>{
                    const {id , title , description} = item;
                    return(
                        <div className={postStyle} key={id}>
                            <h2 className={postTitle}>{title}</h2>
                            <p>{description}</p>
                            <Link to={`/events/${id}`} className={linkStyle}>Learn more</Link>
                        </div>
                    )
                    })}
                </div>
            </section>
            <section className='mb-8'>
                <h1 className={titleStyle}>Past Events</h1>
                <div className={sectionStyle}>
                    {Past.map((item)=>{
                    const {id , title , description} = item;
                    return(
                        <div className={postStyle} key={id}>
                            <h2 className={postTitle}>{title}</h2>
                            <p>{description}</p>
                            <Link to={`/events/${id}`} className={linkStyle} >Learn more</Link>
                        </div>
                    )
                    })}
                </div>
            </section>
        </div>
    );
};

export default Events;