import ResearchNews from "./Components/ResearchNews/ResearchNews";
import ResearchLink from "./Components/ResearchLink/ResearchLink";
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import {  Container } from "@mui/material";
import ResearchTeaser from "./Components/ResearchTeaser/ResearchTeaser";
import {ContainerStyle } from '../../Styles/Container/Container'
import CurrentActivities from "./Components/CurrentActivities/CurrentActivities";
const links=[
  "Research"
]

const Research = () => {
    return (
    <>
 



      <Container sx={ContainerStyle} >
     <CustomBreadcrumbs links={links} text={"Denna sida på svenska"} />
     <ResearchTeaser />
    <ResearchLink />
    <CurrentActivities />
    <ArticleFooter title={"Louise Gustafsson"}
     pageName={"Research"} time={"Jun 28, 2022"} />
     </Container>
    </>
    );
  };
  
  export default Research;