
import { Box, Container ,Grid } from "@mui/material";
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import ArticleFooter from "../ArticleFooter/ArticleFooter"
import {ContainerStyle } from '../../Styles/Container/Container'
import PhDList from "./Components/PhDList/PhDList";
import DoctoralStudies from "./Components/DoctoralStudies/DoctoralStudies";


const    links = [
    "Study at KTH",
    "Doctoral studies (PhD)",

    
      ];
function PhD(){
    return(
        <>
         <Container sx={ContainerStyle} >
              <CustomBreadcrumbs   links={links} text={"Denna sida på svenska"}/>
         
      

        <Grid container spacing={2} sx={{display:"flex" ,
         justifyContent:"space-between" , 
         marginLeft:"0",
        //  marginRight:"20px",
         backgroundColor:"#ffc107",
         width:"100%",
      boxSizing:"border-box",

      
      }}>

        <Grid item xs={12} sm={12} lg={2.8} md={2.8}sx={{backgroundColor:"#528400",
      display:{xs:"none",sm:"none",md:"flex",lg:"flex"},
    

      }}>
        <PhDList />
          </Grid>

          <Grid item xs={12} sm={12} md={8.8} lg={8.8} sx={{
            backgroundColor:"#d4351c" ,
            paddingLeft:"0",
            paddingRight:"0px",
            paddingTop:"0",



}}>
          <DoctoralStudies />
          
      <ArticleFooter title={"info@kth.se"}
     pageName={"Student web"} time={" Jun 21, 2022"} />
          </Grid>

         


        </Grid>
        </Container>
        
        </>
    )
}

export default PhD;