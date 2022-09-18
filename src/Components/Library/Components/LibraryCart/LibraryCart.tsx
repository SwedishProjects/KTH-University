import ReadArticleCard from "../../../ReadArticle/Components/ReadArticleCard/ReadArticleCard";
import {LibrartCardData} from "../../../../Services/Utils/Data/data"
import { useState } from "react";
import { 

    Grid
     } from '@mui/material';
 
const LibraryCart = () => {
  const [Info] = useState(LibrartCardData);
  return(
      <>
    
      

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


       



      
      </>
  )
  };
  
  export default LibraryCart;