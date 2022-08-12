import  IMAGES  from "../../../Assets/Images";
import ExploreCardImage from "../../../Assets/Images/ExploreCardImage";
import MoreNews from "../../../Assets/Images/MoreNews";
export const navbarItems = [
  {
    id: 1,
    name: "home",
    route: "/",
  },
  {
    id: 2,
    name: "studies",
    route: "/studies",
  },
  {
    id: 3,
    name: "research",
    route: "/research",
  },
  {
    id: 4,
    name: "co-operation",
    route: "/co-operation",
  },
  {
    id: 5,
    name: "about-kth",
    route: "/about-kth",
  },
  {
    id: 6,
    name: "library",
    route: "/library",
  },
];


export const SecondaryMenuInfo = [
  {
    id: 1,
    name: "Student",
     route:"/student"
  },
  {
    id: 2,
    name: "Alumni",
     route:"/alumni"
  },
  {
    id: 3,
    name: "Staff",
     route:"/staff"
  },
  {
    id: 4,
    name: "KTH på svenska",
     route:"/"
  },
  
];


export const shopMenuItems = [
  {
    id: 1,
    name: "smart watch",
  },
  {
    id: 2,
    name: "smartphone & ipad",
  },
  {
    id: 3,
    name: "audio & video game",
  },
  {
    id: 4,
    name: "technologies",
  },
  {
    id: 5,
    name: "phone accessories",
  },
  {
    id: 6,
    name: "PC & laptop",
  },
  {
    id: 7,
    name: "camera & phone",
  },
  {
    id: 8,
    name: "virtual reality glasses ",
  },
  {
    id: 9,
    name: "bluetooth speaker ",
  },
];


export const articlesBlogsOne = [
  {
    id: 1,
    title: "The President's blog",
    image: `${IMAGES.blog1}`,

    Imagename:"The President's blog" ,
    text : "Sigbritt Karlsson on KTH's role in society and current and future education and research.",
    links: ["Freedom worth its salt must be allowed to cost money"],
  },
  {
   
    id: 2,
    title: "Digital work environment more established",
    image: `${IMAGES.blog2}`,

    Imagename:"Digital work environment more established" ,
    text : "Jan Gulliksen, Vice President for Digitalization and who just received the Swedish Engineers' Levi Prize, writes in this week's post about how digitalization as a work environment issue has become increasingly relevant, accepted and taken seriously.",
    links: ["Always for the benefit of the user"],
  },
  {
    id: 3,
    title: "International student blog",
    image: `${IMAGES.blog3}`,

    Imagename:"International student blog" ,
    text : "Join master's students Declan, Claire and Valerie on their journeys towards a degree from KTH.",
    links: ["Follow the student blog"],
  },
  
];

export const articlesBlogsTwo = [
  {
    id: 4,
    title: "Your future workplace",
    image: `${IMAGES.blog4}`,

    Imagename:"Your future workplace" ,
    text : " ",
    links: ["Work at KTH" , "EU Charter & Code"],
  },
  {
    id: 5,
    title: "On the war in Ukraine",
    image: `${IMAGES.blog5}`,

    Imagename:"On the war in Ukraine" ,
    text : " ",
    links: ["For Ukrainian researchers" , "For Ukrainian university students" ,"For KTH students and staff"],
  },
  {
    id: 6,
    title: "COVID-19",
    image: `${IMAGES.blog6}`,

    Imagename:"COVID-19" ,
    text : " ",
    links: ["Information for students and staff" , "Research on COVID-19"],
  },
  
];


export const articlesBlogsThree = [
  {
    id: 7,
    title: " ",
    image: `${IMAGES.blog7}`,

    Imagename:" " ,
    text : "THE Innovation and Impact Summit, initiated by ranking body Times Higher Education, is hosted by KTH in April 2022.",
    links: ["THE Innovation and Impact Summit 2022"],
  },
  {
    id: 8,
    title: "",
    image: `${IMAGES.blog8}`,

    Imagename:"Digital work environment more established" ,
    text : "Part of the Unite! alliance - A European Universities Initiative",
    links: ["A university of the future"],
  },
 
  
];


export const ExploreCardData = [
  {
    id: 1,
    title:  "Explore our programmes",
    image: `${ExploreCardImage.card1}`,

    Imagename:"Explore our programmes" ,
    text : "KTH offers 60 master's programmes taught in English. They present an opportunity for students with a bachelor's degree to obtain a master's degree of the highest international standard. The application for most programmes opens in October.",
    link:"Master's studies at KTH",
  },
  {
   
    id: 2,
    title: "Discover KTH in our virtual campus tour",
    image: `${ExploreCardImage.card2}`,

    Imagename:"Discover KTH in our virtual campus tour" ,
    text : "Let our students guide you through the KTH campuses and explore student life at Sweden's largest and highest ranked technical university.",
    link: "Take our virtual campus tour",
  },

  
];

export const MoreNewsData = [
  {
    id: 1,
    title:  "Newsmakers at KTH",
    image: `${MoreNews.card1}`,

    Imagename:"Newsmakers at KTH" ,
    text : "Safer nuclear waste management, electricity from renewable energy sources and sustainable construction These are some of the areas in which researchers and students at KTH have recently garnered widespread attention.",
    link:"Newsmakers at KTH",
  },
  {
   
    id: 2,
    title: "Ink can enable heat-powered wearables",
    image: `${MoreNews.card2}`,

    Imagename:"Ink can enable heat-powered wearables" ,
    text : "An ink coating developed at KTH could be used to convert heat to electrical power for wearables and devices in the internet of things.",
    link: "Ink coating could enable devices powered by heat",
  },

  
];

