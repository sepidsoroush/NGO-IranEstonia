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
          className='rounded-full text-persian-indigo-700 border border-solid border-persian-indigo-700 w-34 px-4 py-2 mt-8 text-base'/>
        </form>
    </div>
  );
  };
  
export default Message;