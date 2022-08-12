import ResearchNews from "./Components/ResearchNews/ResearchNews";
import ResearchLink from "./Components/ResearchLink/ResearchLink";
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import { Box, Container } from "@mui/material";
import {ContainerStyle } from '../../Styles/Container/Container'
const links=[
  "Research"
]

const Research = () => {
    return (
    <>
      <Container sx={ContainerStyle} >
     <CustomBreadcrumbs links={links} text={"Denna sida på svenska"} />
    <ResearchLink />
    <ArticleFooter title={"Louise Gustafsson"}
     pageName={"Research"} time={"Jun 28, 2022"} />
     </Container>
    </>
    );
  };
  
  export default Research;