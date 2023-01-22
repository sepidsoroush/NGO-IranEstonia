import { UilInstagram , UilTwitter , UilFacebookF } from "@iconscout/react-unicons";
const About = () => {
  return(
    <div>
      <div>
        <h2>About Iranian supportive organization (ISO)</h2>
        <p>The Iranian Supportive Organization (ISO) is a non-governmental organization (NGO) that is focused on political activism and opposition to the current regime in Iran, the Islamic Republic. The organization's mission is to support the Iranian people in their struggle for freedom, democracy, and human rights.</p>
        <p>ISO was established by a group of Iranian expats who are deeply concerned about the current state of affairs in Iran, and who believe that the Islamic Republic regime is not representative of the Iranian people. Since its inception, ISO has been actively engaged in a wide range of activities and programs that aim to bring about change in Iran.</p>
        <p>The organization's main focus is on political activism and advocacy. ISO organizes events and rallies to raise awareness about the human rights abuses and political repression taking place in Iran. The organization also works to mobilize the Iranian diaspora and to build a network of support for the pro-democracy movement in Iran.</p>
        <p>ISO also engages in lobbying and advocacy efforts, working with governments, international organizations, and other NGOs to put pressure on the Islamic Republic regime to respect the rights and freedoms of the Iranian people. The organization also works closely with other Iranian opposition groups and pro-democracy activists, both inside and outside of Iran.</p>
        <p>In addition to its political activities, ISO also provides support and assistance to Iranians who have been affected by the regime's repression and human rights abuses. The organization works to provide legal and humanitarian assistance to Iranians who have been arrested, imprisoned, or exiled for their political beliefs.</p>
        <p>Overall, The Iranian Supportive Organization is a vital resource for Iranians seeking change in their country. The organization's work in political activism, advocacy, and support for the pro-democracy movement are crucial in helping Iranians to achieve freedom, democracy, and human rights in their country.</p>
      </div>
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
  
export default About;