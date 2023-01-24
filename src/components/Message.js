const Message = () => {
  return(
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
  );
  };
  
export default Message;