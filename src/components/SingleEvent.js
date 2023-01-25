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
        <div >
            console.log(id);
            <h2>{SelectedEvent.title}</h2>
            <p>{SelectedEvent.description}</p>
            {/* <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${SelectedEvent[0]})` , "height" : "50vh" }}>
                        <span>Slide 1</span>
                    </div>
                </div>
            </Slide> */}
            <Link to={`/events`}>Back</Link>
        </div>
        );
};

export default SingleEvent;