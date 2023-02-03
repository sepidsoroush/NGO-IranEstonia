import a from '../data/Images/Slide-1.jpg';
import b from '../data/Images/Slide-2.jpg';
import c from '../data/Images/Slide-3.jpeg';
import d from '../data/Images/Slide-4.jpeg';
import e from '../data/Images/Slide-5.jpeg';
import f from '../data/Images/Slide-6.jpg';
import g from '../data/Images/Slide-7.jpg';
import h from '../data/Images/Slide-8.jpg';
import i from '../data/Images/MahsaAmini.jpeg';
import j from '../data/Images/christmasTartu.jpg';
import k from '../data/Images/parliman.jpg';
import l from '../data/Images/Hero.jpeg';
import poster2 from '../data/Images/poster2.jpeg';
import defaultPic from '../data/Images/LogoSquare.jpg' ;

const EventsInfo = [
    {
      id: 1,
      date :'21 September 2022',
      title: 'Mahsa is still alive, be her voice!',
      description:
        "Gathering in Tallinn to demand justice for Mahsa Amini.",
      poster : i ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 2,
      date :'24 September 2022',
      title: 'Say Her Name!',
      description: 'Demonstration in Tartu to show solidarity with the women of Iran.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h],
      type : "Past Events"
    },
    {
      id: 3,
      date :'01 October 2022',
      title: 'Woman, Life, Freedom',
      description: 'Demonstration in Tallinn to show solidarity with the women of Iran.',
      poster : d ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 4,
      date :'13 October 2022',
      title: 'TLU Solidarity Event',
      description: 'Participation and making speech about the portrait of Iranians and why the world should care about what is happening in Iran.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 5,
      date :'20 October 2022',
      title: 'Rally in Helsinki',
      description: 'Participation in rally in front of the IR embassy in Helsinki to ask for a regime change in Iran.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 6,
      date :'29 October 2022',
      title: 'Human Chain',
      description: 'Human chain in Tallinn in solidarity with people of Iran at the same time in more than 150 cities around the globe.',
      poster : l ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 7,
      date :'04 November 2022',
      title: 'Graphite art',
      description: 'Street art in Tallinn in solidarity with people of Iran.',
      poster :  defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 8,
      date :'07 November 2022',
      title: 'Press Interview',
      description: 'Maaleht interview with one of the members of the campaign.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 9,
      date :'09 November 2022',
      title: 'Press Interview',
      description: 'A. Greisbeck interview with one of the members of the campaign.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 10,
      date :'17 November 2021',
      title: 'Press Interview',
      description: 'TLU Podcast interview with one of the members of the campaign.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 11,
      date :'19 November 2022',
      title: 'The Silent Massacre',
      description: 'Remembering atrocities of the Islamic Republic',
      poster : b ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 12,
      date :'25 November 2022',
      title: 'Be our Voice!',
      description: 'Distributing pixels in Tallinn to raise awareness about Iranian women in the international day for the elimination of violence against women.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 13,
      date :'25-27 November 2022',
      title: 'PÖFF Festival',
      description: 'Distributing pixels in Tallinn Dark Nights Film Festival to raise awareness about Iran.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 14,
      date :'30 November 2022',
      title: 'Free Iran',
      description: 'Rally at Tartu University Campus at the same time in more than 100 universities around the world.',
      poster : h ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 15,
      date :'01 December 2022',
      title: 'Press Interview',
      description: 'Delfi interview with one of the members of the campaign.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 16,
      date :'04 December 2022',
      title: 'Christmas Market',
      description: 'Distributing gingerbreads in Tallinn Christmas Market to raise awareness about Iran.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 17,
      date :'06  December 2022',
      title: 'Amber Prize',
      description: 'Distributing pixels in Tallinn Amber Prize Event to raise awareness about Iran.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 18,
      date :'12 December 2022',
      title: 'Press Interview',
      description: 'ERR TV interview with two of the members of the campaign.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 19,
      date :'14 December 2022',
      title: 'Press Interview',
      description: 'Feministeerium interview with one of the members of the campaign.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 20,
      date :'17 December 2022',
      title: 'Silence March',
      description: 'Silent march and gathering in front of the Estonian Parliament in Tallinn to say No to Executions in Iran.',
      poster : k ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 21,
      date :'22 December 2022',
      title: 'Start day of Petition',
      description: 'Requesting Estonian residents to sign a petition to ask the President of Estonia not to invite the Islamic Republic ambassador to the Estonian Independence Day Celebration.',
      poster : defaultPic ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 22,
      date :'24 December 2022',
      title: 'Joulud',
      description: 'Distributing Iranian traditional sweet in Tartu to raise awareness about Iran.',
      poster : j ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 23,
      date :'07 January 2023',
      title: 'PS752',
      description: 'An event at Tartu University to remembering 176 innocent passengers and crew of flight PS752 and other victims of the IRGC terrorists.',
      poster : f ,
      image: [a , b , c, d, e, f, g, h]
      ,type : "Past Events"
    },
    {
      id: 24,
      title: 'Telliskivi photo exhibition',
      description: ' In the past 4 months, Iranian protesters have made it quite clear they consider the regime unreformable and are pursuing its demise, without a clear leader.Most of these pictures were taken by protesters during the last four months, but some of them show young victims brutally killed by the regime. It is the aim of this gallery to give audiences a real glimpse of what is happening in Iran and how young people are demanding rights and being suppressed, arrested, raped, and killed.The exhibition is organized in cooperation with the Iranian Supportive Organization (ISO).The exhibition is open 24/7 in Telliskivi Creative City. Three Tree Gallery from 4th of February until the end of March.',
      link : 'https://fb.me/e/3hROkfjsc',
      poster : poster2,
      image:
      []
      ,type : "Upcoming Events"
    },
  ];
  
  export default EventsInfo;