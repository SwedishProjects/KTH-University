import {ReadArticleData} from "../../Services/Utils/Data/data";

import ReadArticleCard from "./Components/ReadArticleCard/ReadArticleCard";
import { useState } from "react";
import { 
   Grid,
      Box,
    
     } from '@mui/material';


function ReadArticle(){
    const [Info] = useState(ReadArticleData);
    return(
        <>
    
    <Grid container spacing={2} sx={{marginTop:"20px" , marginBottom:"20px,"}}>
    
{Info.map((article) => (
     <Grid item xs={12} sm={4} md={4} lg={4}
     
     >
              <ReadArticleCard
              use="Home"
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

}



export default ReadArticle;