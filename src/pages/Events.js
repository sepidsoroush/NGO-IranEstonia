import React from 'react';
import EventsInfo from '../data/EventsInfo';
// import Slider from "../components/Slider" ;
import {  Link } from 'react-router-dom'

const Events = () => {
    return (
        <div className='Event-container'>
            {EventsInfo.map((item)=>{
                const {id , title , description , image} = item;
                return(
                    <div className='event-item' key={id}>
                        <h2 className='event-title'>{title}</h2>
                        <p className='event-description'>{description}</p>
                        <Link to={`/events/${id}`} className='btn btn-details'>Learn more</Link>
                        
                    </div>
                )
            })}
        </div>
    );
};

export default Events;