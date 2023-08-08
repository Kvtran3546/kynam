import {model1, model2, model3, model4, model5, model6, cofounder1, cofounder2, salesperson} from '../assets'

export const navLinks = [
    {
        id: "why us",
        title: "Why Us",
    },
    {
        id: "gallery",
        title: "Gallery",
    },
    {
        id: "communities",
        title: "Communities",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "Contact",
        title: "Contact",
    },
]

export const models = [
    {
      img: model1,
      buildingType: 'Duplex',
      price: 200000,
      address: '123 Main St',
      bedrooms: 2,
      bathrooms: 2,
      sqFootage: 1200,
    },
    {
      img: model2,
      buildingType: 'House',
      price: 350000,
      address: '456 Elm St',
      bedrooms: 4,
      bathrooms: 3,
      sqFootage: 2200,
    },
    {
      img: model3,
      buildingType: 'House',
      price: 275000,
      address: '789 Oak Ave',
      bedrooms: 3,
      bathrooms: 2,
      sqFootage: 1800,
    },
    {
      img: model4,
      buildingType: 'Duplex',
      price: 180000,
      address: '101 Pine Rd',
      bedrooms: 1,
      bathrooms: 1,
      sqFootage: 800,
    },
    {
        img: model5,
        buildingType: 'House',
        price: 390000,
        address: '124 Sampson St',
        bedrooms: 4,
        bathrooms: 3,
        sqFootage: 1300,
      },
    {
      img: model6,
      buildingType: 'House',
      price: 240000,
      address: '10 RoadWood Lane',
      bedrooms: 3,
      bathrooms: 3,
      sqFootage: 1000,
    },
  ];

export const people = [
    {
        img: cofounder1,
        name: 'Samuel Kim',
        title: 'Cofounder',
    },
    {
        img: cofounder2,
        name: 'Jack Wilder',
        title: 'Cofounder',
    },
    {
        img: salesperson,
        name: "Jennifer Smith",
        title: "Broker"
    }
]

export const footerLinks = [
    {
      title: "Menu",
      links: [
        {
          name: "Home",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "Properties",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "About Us",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Services",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Faq",
          link: "https://www.hoobank.com/terms-and-services/",
        },
        {
            name: "Blog",
            link: "https://www.hoobank.com/terms-and-services/",
        },
        {
            name: "Contact Us",
            link: "https://www.hoobank.com/terms-and-services/",
        }
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Facebook",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Twitter",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Instagram",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "LinkedIn",
          link: "https://www.hoobank.com/blog/",
        }
      ],
    }
  ];