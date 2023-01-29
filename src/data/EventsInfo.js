import a from '../data/Images/Slide-1.jpg';
import b from '../data/Images/Slide-2.jpg';
import c from '../data/Images/Slide-3.jpeg';
import d from '../data/Images/Slide-4.jpeg';
import e from '../data/Images/Slide-5.jpeg';
import f from '../data/Images/Slide-6.jpg';
import g from '../data/Images/Slide-7.jpg';
import h from '../data/Images/Slide-8.jpg';
const EventsInfo = [
    {
      id: 1,
      title: 'Mahsa Amini Memorial',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc eros, accumsan at nisl ut, bibendum ornare ipsum. Donec velit.",
      image:
      [a , b ]
      ,type : "Past Events"
    },
    {
      id: 2,
      title: 'October 1st rally',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc eros, accumsan at nisl ut, bibendum ornare ipsum. Donec velit.',
      image:
      [c , d , e ]
      ,type : "Past Events"
    },
    {
      id: 3,
      title: 'Human Chain',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc eros, accumsan at nisl ut, bibendum ornare ipsum. Donec velit.',
      image:
      [f , g , h ,a]
      ,type : "Past Events"
    },
    {
      id: 4,
      title: 'Telliskivi photo exhibition',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc eros, accumsan at nisl ut, bibendum ornare ipsum. Donec velit.',
      image:
      []
      ,type : "Upcoming Events"
    },
  ];
  
  export default EventsInfo;