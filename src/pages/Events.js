import React from 'react';
import { Link } from 'react-router-dom';
import EventsInfo from '../data/EventsInfo';

const Events = () => {
    const Upcoming = EventsInfo.filter((item) => item.type === "Upcoming Events");
    const Past = EventsInfo.filter((item) => item.type === "Past Events");  
    return (
        <div>
            <section>
                <h1>Upcoming Events</h1>
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
            </section>
            <section>
                <h1>Past Events</h1>
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
            </section>
        </div>
    );
};

export default Events;