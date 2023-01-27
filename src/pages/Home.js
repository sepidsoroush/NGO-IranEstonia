import { Link } from "react-router-dom";
import Events from "./Events" ;
import Message from "../components/Message";

import Logo from "../data/Images/Logo.jpg";

const Home = () => {
    return(
      <div>
        <section>
          <Events />
        </section>
        <section>
          <h1>Lets Create Something Great Together!</h1>
          <Message />
        </section>
      </div>
    );
  };
  
  export default Home;