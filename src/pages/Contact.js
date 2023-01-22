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
          <h1>Newsletter</h1>
          <p>Sign up to our Newsletter, to recieve updates on the latest news and upcoming events. We respect ypur privacy, Your Information is safe with us.</p>
          <form action="">
            <input type="email" />
            <input type="submit" />
          </form>
        </div>

      </div>
    );
  };
  
  export default Contact;