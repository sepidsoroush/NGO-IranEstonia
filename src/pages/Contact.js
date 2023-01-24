import { UilInstagram , UilTwitter , UilFacebookF } from "@iconscout/react-unicons";
const Contact = () => {
  return(
    <div>
      <div>
          <h2>Contact with us</h2>
          <p>Info@iraniansupportive.org</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/freeirangroup"><UilFacebookF /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/freeirangroup/"><UilInstagram/></a>
            </li>
            <li>
              <a href="https://twitter.com/iranianiso?s=21&t=Jpm22UuHWW--BpFe9r8y3A"><UilTwitter/></a>
            </li>
          </ul>
      </div>
      <div>
        <h1>Get In Touch</h1>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form action="">
          <input type="name" placeholder="Name" />
          <input type="email" placeholder="Email Address" />
          <input type="textarea" placeholder="Your Message" />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
  };
  
export default Contact;