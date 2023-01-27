import Message from "../components/Message";
import Media from "../components/SocialMedia";

const Contact = () => {
  return(
    <div className="mt-56 flex flex-col justify-center items-center max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center ">
        <h1 className="text-2xl font-semibold mt-8">Feel Free to Contact US</h1>
        <p className="mt-6 mb-3">Info@iraniansupportive.org</p>
        <Media />
      </div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-semibold mt-8">Get In Touch</h1>
        <p className="text-xs mt-1 mb-3">Your email address will not be published. Required fields are marked <span className="text-red-500">*</span></p>
        <Message />
      </div>
    </div>
  );
  };
  
export default Contact;