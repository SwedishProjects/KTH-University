import ResearchNews from "./Components/ResearchNews/ResearchNews";
import ResearchLink from "./Components/ResearchLink/ResearchLink";
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import {  Container,Grid ,Box } from "@mui/material";
import ResearchTeaser from "./Components/ResearchTeaser/ResearchTeaser";
import {ContainerStyle } from '../../Styles/Container/Container'
import CurrentActivities from "./Components/CurrentActivities/CurrentActivities";
import ResearchBulletin from "./Components/ResearchBulletin/ResearchBulletin"
import ResearchCalendar from "./Components/ResearchCalendar/ResearchCalendar";
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
    <Grid container spacing={2}>
   
       <Grid item xs={12} sm={6} md={6} lg={6}>
         <ResearchNews />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <ResearchBulletin />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
         <ResearchCalendar />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        <ResearchBulletin />
        </Grid>
      
 
      
      </Grid>
    


    <ArticleFooter title={"Louise Gustafsson"}
     pageName={"Research"} time={"Jun 28, 2022"} />
     </Container>
    </>
    );
  };
  
  export default Research;