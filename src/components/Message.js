const Message = () => {
  return(
    <div>
        <form action="" className=" flex flex-col items-center text-sm">
          <input type="name" placeholder="Name" required className="border border-solid divide-gray-300 w-96 h-10 pl-2 my-1"/>
          <input type="email" placeholder="Email Address" required
          className="border border-solid divide-gray-300 w-96 h-10 pl-2 my-1"/>
          <input type="textarea" placeholder="Your Message" required
          className="border border-solid divide-gray-300 w-96 h-36 pl-2 my-1"/>
          <input type="submit" value="Send Message" 
          className='bg-persian-indigo-800 p-2 mt-3 rounded text-white w-32 text-base'/>
        </form>
    </div>
  );
  };
  
export default Message;