import { Helmet } from "react-helmet-async";
import Message from "../components/Message";
import Media from "../components/SocialMedia";

const Contact = () => {
  return(
    <div className="mt-40 mb-20 flex flex-col justify-center items-center max-w-screen-xl mx-auto">
      <Helmet>
        <title>Contact - ISO</title>
        <meta name='description' content='contact ISO organization'/>
      </Helmet>
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl font-semibold mt-8">Feel free to contact Us</h1>
        <p className="mt-6 mb-3">Info@iraniansupportive.org</p>
        <Media />
      </div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-semibold mt-8">Get In Touch</h1>
        <p className="text-xs mt-1 mb-3 text-center">Your email address will not be published.<br/> All fields are required.</p>
        <Message />
      </div>
    </div>
  );
  };
  
export default Contact;