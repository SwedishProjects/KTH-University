import OpeningHours from "../OpeningHours/OpeningHours";
import {  Container,Grid , } from "@mui/material";
import ExploreCard from '../../../Explore/Components/ExploreCard/ExploreCard';
import images from "../../../../Importer/Importer"
function AppliesSummer(){
    return(
        <>

<Grid container spacing={2}>
   
   <Grid item xs={12} sm={9} md={9} lg={9}>
   <Container
      sx={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#ffffff",
        maxWidth: "100%",
       width:"100%",
      
      padding:"0",
        
      }}
    >
       
              <ExploreCard
              title= "Summer time at the library"
              image= {images['Library/sommar_biblioteket.jpg']}
              Imagename= "Summer time at the library"
              text = "Summer time is here, and that means that the library has limited opening hours and longer loan periods. However, our digital support is open all summer to answer your questions."
              link="Read more about what applies at the library this summer"
              />
       
    </Container>
    </Grid>
    <Grid item xs={12} sm={3} md={3} lg={3}>
    <OpeningHours />
    </Grid>
    </Grid>
      
        </>
    )
}
export default AppliesSummer;