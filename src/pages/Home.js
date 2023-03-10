import { Helmet } from 'react-helmet-async';
import UpcomingEvent from '../components/UpcomingEvent' ;
import Message from '../components/Message';
import  {AboutUs, OurStory } from '../components/AboutUs';
import Hero from '../data/Images/Hero.jpeg';


const Home = () => {
    return(
      <div className=''>
        <Helmet>
          <title>Home - ISO</title>
          <meta name='description' content='Home page of ISO organization'/>
        </Helmet>
        <section className='flex items-center justify-center h-screen w-screen bg-fixed bg-center bg-cover overflow-x-hidden mt-28 ' style={{backgroundImage : `url('${Hero}')`}}>
          <div className='p-8 text-2xl text-white bg-persian-indigo-800 bg-opacity-50 flex flex-col float-left w-96'>
            <p className='text-5xl font-bold'>Iranian supportive organization</p>
            <hr className='border border-white my-4  w-16'/>
            <p className='text-base text-justify'>Join ISO and work with other Iranian people in Estonia to spread awareness about Iran and create a supportive community for Iranians in Estonia!</p>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center  mx-auto  bg-gradient-to-b from-transparent to-persian-indigo-50 '>
          <UpcomingEvent />
        </section>
        <section className='md:max-w-6xl mx-auto'>
          <AboutUs/>
          <OurStory />
        </section>
        <div className='bg-gradient-to-r from-persian-indigo-100 via-persian-indigo-700 to-persian-indigo-100 md:max-w-6xl mx-auto h-3 my-20'></div>
        <section className=' mb-10 md:max-w-6xl mx-auto'>
          <h1 className="text-3xl font-semibold my-10 text-center">Lets Create Something Great Together!</h1>
          <Message />
        </section>
      </div>
    );
  };
  
  export default Home;