// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  // import images
  import Appartment1 from './images/appartment1.jpg'
  import Appartment2 from './images/AppartmentNew.jpg'
  import Appartment3 from './images/appr.jpg'
  import SmartHome from './images/smart-home.jpg'
  import Avatar1 from "./images/avatar1.jpg"
  import Avatar2 from "./images/avatar2.jpg"
  import Avatar3 from "./images/avatar1.jpg"
  
  export const navigation = [
    {
      name: 'Home',
      href: 'home',
    },
    {
      name: 'About',
      href: 'about',
    },
    {
      name: 'Appartments',
      href: 'contact',
    },
    {
      name: 'Projects',
      href: 'contact',
    },
    {
      name: 'Gallery',
      href: 'contact',
    },
    {
      name: 'Contact',
      href: 'contact',
    },
  ];
  
  export const newInStore = {
    title: 'New Appartments',
    subtitle: 'Take a tour around our latest appartments',
    link: 'Check all',
    icon: <IoIosArrowRoundForward />,
    products: [
      {
        name: '3 Bedroom Story, Appapa Lagos',
        image: <Appartment1 />,
      },
      {
        name: 'Duplex, Oshogbo Osun State',
        image: <Appartment2 />,
      },
      {
        name: 'Bungalow, Edo State',
        image: <Appartment3 />,
      },
      {
        name: '40 Rooms, Storey Buidling, Zamfara',
        image: <Appartment1 />,
      },
    ],
  };
  
  export const testimonial = {
    title: 'What people are saying about us',
    image: <SmartHome />,
    persons: [
      {
        avatar: <Avatar1 />,
        name: 'Josh Smith',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional, interest and useful for a lot of people .”',
      },
      {
        avatar: <Avatar2 />,
        name: 'Brandi Johns',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional, interest and useful for a lot of people .”',
      },
      {
        avatar: <Avatar3/>,
        name: 'Paula Pfeffer',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional, interest and useful for a lot of people .”',
      },
    ],
  };
  
  export const newsletter = {
    title: 'Get more discount Off your order',
    subtitle: 'Join our mailing list',
    placeholder: 'Your email address',
    buttonText: 'Shop Now',
  };
  
  export const footer = {
    social: [
      {
        icon: <IoLogoYoutube />,
        href: '#',
      },
      {
        icon: <IoLogoInstagram />,
        href: '#',
      },
      {
        icon: <IoLogoGithub />,
        href: '#',
      },
      {
        icon: <IoLogoFacebook />,
        href: '#',
      },
    ],
    copyright: 'FurniShop 2022 - All Rights Reserved.',
  };