import { Link } from "react-router-dom";
import Events from "./Events" ;
import Message from "../components/Message";

import Logo from "../data/Images/Logo.jpg";

const Home = () => {
    return(
      <div>
        <section>
          <img style={{height : "680px" , width : "400px"}} src={Logo} alt="Iranian supportive organization" />
          <div>
            <h1>Iranian supportive organization</h1>
            <Link to="/donate">Donate</Link>
          </div>
        </section>
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