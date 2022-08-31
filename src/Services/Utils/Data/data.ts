import  {IMAGES , AboutIMAGES}  from "../../../Assets/Images";
import ExploreCardImage from "../../../Assets/Images/ExploreCardImage";
import MoreNews from "../../../Assets/Images/MoreNews";
import ReadArticle from "../../../Assets/Images/ReadArticle";

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


//--------------------------------------ReadArticle ----------------------


export const ReadArticleData = [
  {
    id: 1,
    title: "Paving the way for a space station around the moon",
    image: `${ReadArticle.Read1}`,

    Imagename:"Paving the way for a space station around the moon" ,
    text : "Just four years after graduating from KTH, Aerospace Engineer Desirée Brundin has managed to establish herself in the international space sector. Today she works at Rocket Lab in New Zealand and is cu...",
    ReadLink: "Read the article ",
  },
  {
   
    id: 2,
    title: "KTH retains all-time highest QS ranking for second consecutive year",
    image: `${ReadArticle.Read2}`,

    Imagename:"KTH retains all-time highest QS ranking for second consecutive year" ,
    text : "For the second consecutive year, KTH has held its all-time highest position in the world’s top 100 university rankings, which were published on June 8 by QS World University Rankings. ",
    ReadLink: "Read the article",
  },
  {
    id: 3,
    title: "Boats that fly like the wind",
    image: `${ReadArticle.Read3}`,

    Imagename:"Boats that fly like the wind" ,
    text : "Silent zero-emission vessels that swiftly float past the cobs and skerries – is this the future of coastal and open-water boating? We paid a visit to the KTH Värmdö field station, where researchers ar...    ",
    ReadLink: "Read the article",
  },
  
];


////------------------------------------ Home Page Calendar ------------------------


export const HomeCalendar = [
  {
    id: 1,
    links:"Walk in the Pride parade with Academic Pride!",
    day:"6",
    month:"Aug",
    title:"Miscellaneous",
    date:"Saturday 2022-08-06, 11:30 - 16:00",
    location:"Rotundan, Stockholm University",
  },
  {
   
    id: 2,
    links:"PDC Summer School 2022: 'Introduction to High Performance Computing'",
    day:"15",
    month:"Aug",
    title:"Conferences and events",
    date:"Mon 2022-08-15, 09:00 - Fri 2022-08-26, 12:30",
    location:"KTH Main Campus",
  },
  {
    id: 3,
    links:"Formation of Bainite Studied by In-situ High-energy X-ray Diffraction",
    day:"19",
    month:"Aug",
    title:"Public defences of doctoral theses",
    date:"Friday 2022-08-19, 10:00",
    location:"Kollegiesalen, Brinellvägen 8, Stockholm",
  },
  
];


//---------------------About Page -------------------


export const CardsInfo1 = [
  {
    id: 1,
    title: "Meet KTH",
    image: `${AboutIMAGES.About1}`,

    Imagename:"Meet KTH" ,
    text : "KTH offers many opportunities throughout the year that invites you to meet us, collaborate with us and participate in our activities. Everything from music to popular science lectures, academic festivals and scientific conferences can be found here.",
    links: ["See upcoming events at KTH"],
  },
  {
   
    id: 2,
    title: "Discover KTH",
    image: `${AboutIMAGES.About2}`,

    Imagename:"Discover KTH" ,
    text : "Since its founding in 1827, KTH Royal Institute of Technology in Stockholm has grown to become one of Europe’s leading technical and engineering universities.' Levi Prize, writes in this week's post about how digitalization as a work environment issue has become increasingly relevant, accepted and taken seriously.",
    links: ["Study at KTH","Research","Business and Community",],
  },

  
];



export const CardsInfo2 = [
  
  {
    id: 1,
    title: "Work at KTH",
    image: `${AboutIMAGES.About3}`,

    Imagename:"Work at KTH" ,
    text : "At KTH you will have the opportunity of bringing life to your ideas and, at the same time, contributing to tomorrow's society.",
    links: ["KTH - Your future workplace","Vacancies"],
  },
  {
    id: 2,
    title: "Exchange opportunities",
    image: `${AboutIMAGES.About4}`,

    Imagename:"Exchange opportunities" ,
    text : "KTH has an active student and staff exchange with over 200 prominent technical universities worldwide.",
    links: ["Exchange universities"],
  },
  
];



export const CardsInfo3 = [
  
  {
    id: 1,
    title: "KTH's Annual Report 2021",
    image: `${AboutIMAGES.About5}`,

    Imagename:"KTH's Annual Report 2021" ,
    text : "The Annual Report gives you a good oversight of KTH operations and virtually all our official statistics for 2021.",
    links: ["Find KTH's Annual Reports"],
  },
  {
    id: 2,
    title: "KTH has gained HR Excellence in Research accreditation",
    image: `${AboutIMAGES.About6}`,

    Imagename:"KTH has gained HR Excellence in Research accreditation" ,
    text : "KTH has now signed up to the EU Charter & Code following EU Commission approval of our application. ",
    links: ["KTH in line with EU Charter & Code" ,"About the EU C&C on the Euraxess website"],
  },
  
];
