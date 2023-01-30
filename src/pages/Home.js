import Events from './Events' ;
import Message from '../components/Message';
import About from './About';

const Home = () => {
    return(
      <div>
        <section>
          <About/>
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