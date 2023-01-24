import { Link } from "react-router-dom";
import Events from "./Events" ;

import Logo from "../data/Images/Logo.jpg";

const Home = () => {
    return(
      <div>
        <section className="section-hero">
          <img style={{height : "680px" , width : "400px"}} src={Logo} alt="Iranian supportive organization" />
          <div>
            <h1>Iranian supportive organization</h1>
            <Link to="/donate">Donate</Link>
          </div>
        </section>
        <section className="section-events">
          <Events />
        </section>
      </div>
    );
  };
  
  export default Home;