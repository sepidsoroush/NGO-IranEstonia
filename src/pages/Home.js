import { Link } from "react-router-dom";

import Logo from "../data/Images/Logo.jpg";

const Home = () => {
    return(
      <div>
        <section>
          <img style={{height : "100vh" , width : "20vw"}} src={Logo} alt="Iranian supportive organization" />
          <h1>Iranian supportive organization</h1>
          <Link to="/donate">Donate</Link>
        </section>
      </div>
    );
  };
  
  export default Home;