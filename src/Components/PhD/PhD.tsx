
import { Box, Container ,Grid } from "@mui/material";
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import ArticleFooter from "../ArticleFooter/ArticleFooter"
import {ContainerStyle } from '../../Styles/Container/Container'
import PhDNav from "./Components/PhDNav/PhDNav";
import DoctoralStudies from "./Components/DoctoralStudies/DoctoralStudies";
import Options from "./Components/Options/Options";
import Degrees from "./Components/Degrees/Degrees";

const    links = [
    "Study at KTH",
    "Doctoral studies (PhD)",

    
      ];
function PhD(){
    return(
        <>
         <Container sx={ContainerStyle} >
              <CustomBreadcrumbs   links={links} text={""}/>
         
      

        <Grid container spacing={2} sx={{display:"flex" ,
         justifyContent:"space-between" , 

marginTop:"20px",
      
      }}>

        <Grid item xs={12} sm={12} lg={2.8} md={2.8}sx={{
          // backgroundColor:"#528400",
      display:{xs:"none",sm:"none",md:"flex",lg:"flex"},
    

      }}>
        <PhDNav/>
          </Grid>

          <Grid item xs={12} sm={12} md={8.8} lg={8.8} sx={{
            backgroundColor:"#d4351c" ,
            paddingLeft:"0",
            paddingRight:"0px",
            paddingTop:"0",



}}>
          <DoctoralStudies />
          <Degrees />
          <Options />
        


          
      <ArticleFooter title={"info@kth.se"}
     pageName={"Student web"} time={" Jun 21, 2022"} />
          </Grid>

         


        </Grid>
        </Container>
        
        </>
    )
}

export default PhD;