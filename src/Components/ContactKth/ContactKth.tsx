
import { Box, Container ,Grid } from "@mui/material";
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import ContactNav from "./Components/ContactNav/ContactNav"
import {ContainerStyle } from '../../Styles/Container/Container'
import ArticleFooter from "../ArticleFooter/ArticleFooter"
import ContactText from "./Components/ContactText/ContactText"

const    links = [
    "About KTH",
    "Contact",

    
      ];
function ContactKth(){
    return (
        <>
              <Container sx={ContainerStyle} >
              <CustomBreadcrumbs   links={links} text={"Denna sida på svenska"}/>
         
      

        <Grid container spacing={2} sx={{display:"flex" ,
         justifyContent:"space-between" , 
      
      }}>

        <Grid item xs={12} sm={2.8} lg={2.8} sx={{backgroundColor:"#528400",
      display:{xs:"none",sm:"none",md:"none",lg:"flex"}
      }}>
        <ContactNav />
          </Grid>

          <Grid item xs={12} sm={8.8} lg={8.8} sx={{
            // backgroundColor:"#d4351c" ,
 marginLeft:"30px",
 paddingRight:"50px"}}>
          <ContactText />
          
      <ArticleFooter title={"Communications and Business Liaisons"}
     pageName={"About KTH"} time={"May 03, 2022"} />
          </Grid>

         


        </Grid>
        </Container>
        </>

    );
}

export default ContactKth;