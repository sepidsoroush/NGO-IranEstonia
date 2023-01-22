import { UilLock } from '@iconscout/react-unicons';

const Donate = () => {
    return (
      <div>
        <h2>Help us do more</h2>
        <div>
          <p>Fusce sit amet velit velit. Aliquam id velit malesuada, condimentum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget velit semper nisl sollicitudin condimentum vitae at felis. Morbi vehicula.</p>
          <p>Pellentesque elementum vel ante sit amet finibus. Donec dapibus ligula eleifend, dictum tortor in, euismod.</p>
        </div>
        <fieldset className="donation-container">
          <legend><UilLock/> Secure donation</legend>
          <a href="https://pay.google.com/">G pay</a>
          <a href="https://www.paypal.com/">PayPal</a>
          <a href="https://www.patreon.com/">PATREON</a>
        </fieldset>
        <div className="faq-container">

        </div>
      </div>
    );
  };
  
  export default Donate;