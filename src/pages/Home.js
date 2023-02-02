import Events from './Events' ;
import Message from '../components/Message';
import  {AboutUs, OurStory } from '../components/AboutUs';

const Home = () => {
    return(
      <div>
        <section className=' mt-28 '>
          <AboutUs/>
          <OurStory />
        </section>
        <section>
          <Events />
        </section>
        <section className=' my-20 '>
          <h1 className="text-4xl font-semibold mb-8 pt-20 text-center">Lets Create Something Great Together!</h1>
          <Message />
        </section>
      </div>
    );
  };
  
  export default Home;