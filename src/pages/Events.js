import React from 'react';
import PastEvent from '../components/PastEvent';
import UpcomingEvent from '../components/UpcomingEvent';

const Events = () => { 
    return (
        <div className='w-screen mt-28 pb-20 flex flex-col'>
            <UpcomingEvent />
            <PastEvent />
        </div>
    );
};

export default Events;