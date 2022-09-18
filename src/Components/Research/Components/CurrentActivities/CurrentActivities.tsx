import ReadArticleCard from "../../../ReadArticle/Components/ReadArticleCard/ReadArticleCard";
import {CurrentActivitiesData} from "../../../../Services/Utils/Data/data"
import { useState } from "react";
import { 
  Typography,
      Grid,
    
     } from '@mui/material';
 import {teaserBoxHeading,} from "../../../../Styles/Study";
const CurrentActivities = () => {
  const [Info] = useState(CurrentActivitiesData);
  return(
      <>
      <Typography sx={teaserBoxHeading}>Current activities</Typography>
  
      <Grid container spacing={2} sx={{marginTop:"20px" , marginBottom:"20px,"}}>
{Info.map((article) => (
      <Grid item xs={12} sm={4} md={4} lg={4}>
            <ReadArticleCard
            use="Current activities"
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
  
  export default CurrentActivities;