import ResearchNews from "./Components/ResearchNews/ResearchNews";
import ResearchLink from "./Components/ResearchLink/ResearchLink";
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import {  Container,Grid ,Box } from "@mui/material";
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
    <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
         sx={{
          flexWrap: "wrap",
          flexGrow: "1",
         
     
          width:{xs:"100%",sm:"100%",lg:"1132px"},
        margin:"0 ",
        // marginRight: {xs:"-10px",sm:"30px",lg:"30px"},
        // marginLeft: {xs:"-25px",sm:"-30px",lg:"-30px"},
        }}
      >
       <Box
      sx={{
        
  display: "flex",

flexWrap:{sm:"wrap"},
  flexDirection: {xs:"column",sm:"row",md:"row",lg:"row",},
  justifyContent: {xs:"center",sm:"center",md: "flex-start",lg: "flex-start",},
 
 
      }}
      >
       <Grid item xs={12} sm={6} md={6} lg={6}>
         <ResearchNews />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
        
        </Grid>
      
       </Box>
      
      </Grid>
    


    <ArticleFooter title={"Louise Gustafsson"}
     pageName={"Research"} time={"Jun 28, 2022"} />
     </Container>
    </>
    );
  };
  
  export default Research;