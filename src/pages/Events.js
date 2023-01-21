import React from 'react';
import EventsInfo from '../data/EventsInfo';
import { useNavigate } from "react-router-dom";


const Events = () => {
    const navigate = useNavigate();

    return (
        <div className='Event-container'>
            {EventsInfo.map((item)=>{
                const {id , title , description} = item;
                return(
                    <div className='event-item' key={id}>
                        <h2 className='event-title'>{title}</h2>
                        <p className='event-description'>{description}</p>
                        <button onClick={()=>navigate(`/events/${id}`)}  className='btn btn-details'>Learn more</button>
                        
                    </div>
                )
            })}
        </div>
    );
};

export default Events;