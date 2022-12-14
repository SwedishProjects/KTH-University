import { Box, Container } from "@mui/material";
import {ContainerStyle } from '../../Styles/Container/Container'
import AboutLinks
 from "./Components/AboutLinks/AboutLinks";
 import AboutCart from "./Components/AboutCart/AboutCart";
 import  ArticleFooter from '../ArticleFooter/ArticleFooter';


import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';

const    links = [
 "About KTH",
 
   ];

const About = () => {
  return (
    <>
       <Container sx={ContainerStyle} >
        <CustomBreadcrumbs   links={links} text={"Denna sida på svenska"}/>
   
      
        <AboutLinks />
  
 
        <AboutCart />
   
   
      <ArticleFooter title={"Sofie Kim"}
     pageName={"About KTH"} time={"Mar 27, 2022"} />
</Container>
  </>
     
  );
};

export default About;
