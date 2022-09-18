import ReadArticleCard from "../../../ReadArticle/Components/ReadArticleCard/ReadArticleCard";
import {LibrartCardData} from "../../../../Services/Utils/Data/data"
import { useState } from "react";
import { 
  Typography,
      Box,
    Grid
     } from '@mui/material';
 import {teaserBoxHeading,} from "../../../../Styles/Study";
const LibraryCart = () => {
  const [Info] = useState(LibrartCardData);
  return(
      <>
    
      {/* <Box sx={{
          margin: "15px 0",
          width:" 100%",
         
          overflow: "hidden",
          display: "flex",
          flexWrap:{xs:"wrap",md:"no-wrap",sm:"no-wrap",lg:"no-wrap"},
         alignItems:"stretch",
         
          justifyContent: "space-between",
         
          
          maxWidth: "100%",
      }}> */}

 <Grid container spacing={2} sx={{marginTop:"20px" , marginBottom:"20px,"}}>
{Info.map((article) => (
  <Grid item xs={12} sm={6} md={3} lg={3}>
            <ReadArticleCard
            use="LibraryCart"
            title= {article.title}
            image= {article.image}
            Imagename= {article.Imagename}
            text = {article.text}
            ReadLink={article.ReadLink}
            />
            </Grid>
          ))}

</Grid>


          {/* </Box> */}



      
      </>
  )
  };
  
  export default LibraryCart;