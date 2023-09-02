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

  export const products = {
    title: 'All Products',
    subtitle:
      'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
    pages: [
      {
        productList: [
          {
            image: <Appartment1 />,
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Appartment2 />,
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Appartment1/>,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Appartment2 />,
            icon: <IoMdAddCircle />,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
          },
          {
            image: <Appartment1 />,
            icon: <IoMdAddCircle />,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
          },
          {
            image: <Appartment2 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
      {
        productList: [
          {
            image: <Appartment1 />,
            icon: <IoMdAddCircle />,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Appartment2/>,
            icon: <IoMdAddCircle />,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Appartment1 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Appartment2 />,
            icon: <IoMdAddCircle />,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
          },
          {
            image: <Appartment1 />,
            icon: <IoMdAddCircle />,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
          },
          {
            image: <Appartment2 />,
            icon: <IoMdAddCircle />,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
          },
          {
            image: <Appartment3 />,
            icon: <IoMdAddCircle />,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Appartment1 />,
            icon: <IoMdAddCircle />,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
    ],
  };
  
  
  export const navigation = [
    {
      name: 'Home',
      href: 'home',
      link: './'
    },
    {
      name: 'About',
      href: 'about',
      link: '/about'
    },
    {
      name: 'Appartments',
      href: 'Appartments',
      link: '/appartments'
    },
    {
      name: 'Projects',
      href: 'contact',
      link: '/project'
    },
    {
      name: 'Gallery',
      href: 'contact',
      link: '/gallery'
    },
    {
      name: 'Contact',
      href: 'contact',
      link: '/contact'
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