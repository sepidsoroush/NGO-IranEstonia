import UpcomingEvent from '../components/UpcomingEvent' ;
import Message from '../components/Message';
import  {AboutUs, OurStory } from '../components/AboutUs';

const Home = () => {
    return(
      <div className='md:max-w-6xl mx-auto'>
        <section className='mt-28 '>
          <AboutUs/>
          <OurStory />
        </section>
        <section className='flex flex-col justify-center items-center'>
          <UpcomingEvent />
          <a href="./Events" className='bg-persian-indigo-700 text-white rounded px-4 py-2'>About Previous Events</a>
        </section>
        <section className=' my-20 '>
          <h1 className="text-3xl font-semibold mb-8 pt-20 text-center">Lets Create Something Great Together!</h1>
          <Message />
        </section>
      </div>
    );
  };
  
  export default Home;