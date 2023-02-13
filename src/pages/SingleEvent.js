import {Helmet} from 'react-helmet-async';
import{ React} from 'react';
import 'react-slideshow-image/dist/styles.css';
import { useParams, Link } from 'react-router-dom';
import EventsInfo from '../data/EventsInfo';
import { Slide } from 'react-slideshow-image';


const SingleEvent = () => {
    const {id} = useParams();
    const SelectedEvent = EventsInfo[id -1];
    const slideImages = SelectedEvent.image;
        return(
        <div className=' flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-40 mb-20'>
            <Helmet>
                <title>Events - ISO</title>
                <meta name='description' content='Events of ISO organization'/>
            </Helmet>
            <h2 className='text-xl font-semibold text-center'>{SelectedEvent.title}</h2>
            <p className='text-sm text-gray-500'>{SelectedEvent.date}</p>
            <p className='text-sm text-gray-500'>{SelectedEvent.location}</p>
            <p className='mx-auto my-5 '>{SelectedEvent.description}</p>
            {slideImages.length===0 ? null :
            <div className='max-w-xl w-full'>
                <Slide >
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                            <img  src={slideImage} alt={SelectedEvent.title} className='w-full' />
                        </div>
                    ))} 
                </Slide>
            </div>}
            
            <Link to={`/events`} className='font-medium mt-4 hover:bg-persian-indigo-700 hover:bg-opacity-10 active:bg-persian-indigo-700 active:bg-opacity-10 transition duration-500 ease-in-out px-4 py-2 rounded shadow-md hover:shadow-lg'>Back</Link>
        </div>
        );
};

export default SingleEvent;
