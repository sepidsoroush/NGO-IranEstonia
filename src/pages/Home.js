import UpcomingEvent from '../components/UpcomingEvent' ;
import Message from '../components/Message';
import  {AboutUs, OurStory } from '../components/AboutUs';
import Hero from '../data/Images/Hero.jpeg';


const Home = () => {
    return(
      <div className=''>
        <section className='flex items-center justify-center h-screen w-screen bg-fixed bg-center bg-cover overflow-x-hidden mt-28' style={{backgroundImage : `url('${Hero}')`}}>
          <div className='p-5 text-2xl text-persian-indigo-900 bg-white bg-opacity-50 rounded'>
            Welcome to ISO Website
          </div>
        </section>
        <section className='md:max-w-6xl mx-auto'>
          <AboutUs/>
          <OurStory />
        </section>
        <section className='flex flex-col justify-center items-center md:max-w-6xl mx-auto'>
          <UpcomingEvent />
        </section>
        <section className=' my-20 md:max-w-6xl mx-auto'>
          <h1 className="text-3xl font-semibold mb-8 pt-20 text-center">Lets Create Something Great Together!</h1>
          <Message />
        </section>
      </div>
    );
  };
  
  export default Home;