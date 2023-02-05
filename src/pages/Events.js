import React from 'react';
import {Helmet} from 'react-helmet-async';
import PastEvent from '../components/PastEvent';
import UpcomingEvent from '../components/UpcomingEvent';

const Events = () => { 
    return (
        <div className='w-screen mt-28 pb-20 flex flex-col'>
            <Helmet>
                <title>Events - ISO</title>
                <meta name='description' content='Events of ISO organization'/>
            </Helmet>
            <UpcomingEvent />
            <PastEvent />
        </div>
    );
};

export default Events;