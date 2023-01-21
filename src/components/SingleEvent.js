import React from 'react';
import 'react-slideshow-image/dist/styles.css';
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useParams, Link } from 'react-router-dom'
import EventsInfo from '../data/EventsInfo';


const SingleEvent = () => {
    const {id} = useParams();
    const SelectedEvent = EventsInfo[id -1];
    console.log(id);
        return(
        <div className='Single-Event' >
            console.log(id);
            <h2 className='event-title'>{SelectedEvent.title}</h2>
            <p className='event-description'>{SelectedEvent.description}</p>
            {/* <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${SelectedEvent[0]})` , "height" : "50vh" }}>
                        <span>Slide 1</span>
                    </div>
                </div>
            </Slide> */}
            <Link to={`/events`} className='btn btn-details'>Back</Link>
        </div>
        );
};

export default SingleEvent;