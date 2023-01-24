import Message from "../components/Message";
import Media from "../components/SocialMedia";
import { UilInstagram , UilTwitter , UilFacebookF } from "@iconscout/react-unicons";
const Contact = () => {
  return(
    <div>
      <div>
        <Media />
      </div>
      <div>
        <h1>Get In Touch</h1>
        <p>Your email address will not be published. Required fields are marked *</p>
        <Message />
      </div>
    </div>
  );
  };
  
export default Contact;