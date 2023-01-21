import React from 'react';
import EventsInfo from '../data/EventsInfo';
// import Slider from "../components/Slider" ;

const Events = () => {
    return (
        <div className='Event-container'>
            {EventsInfo.map((item)=>{
                const {id , title , description , image} = item;
                return(
                    <div className='event-item' key={id}>
                        <h2 className='event-title'>{title}</h2>
                        <p className='event-description'>{description}</p>
                        <button type='button' className='event-more'>Learn More </button>
                    </div>
                )
            })}
        </div>
    );
};

export default Events;