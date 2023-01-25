import { UilInstagram , UilTwitter , UilFacebookF } from "@iconscout/react-unicons";

const Media = () => {
    return(
      <div>
            <ul className="flex flex-row">
                <li className="w-18 h-18 text-white p-2 mx-1 bg-persian-indigo-700 rounded-full ">
                    <a href="https://www.facebook.com/iraniansupportive" ><UilFacebookF /></a>
                </li>
                <li className="w-18 h-18 text-white p-2 mx-1 bg-persian-indigo-700 rounded-full ">
                    <a href="https://www.instagram.com/freeirangroup/"><UilInstagram/></a>
                </li>
                <li className="w-18 h-18 text-white p-2 mx-1 bg-persian-indigo-700 rounded-full ">
                    <a href="https://twitter.com/iranianiso?s=21&t=Jpm22UuHWW--BpFe9r8y3A"><UilTwitter/></a>
                </li>
            </ul>
      </div>
    );
    };
    
  export default Media;