import ReadArticleCard from "../../../ReadArticle/Components/ReadArticleCard/ReadArticleCard";
import {CurrentActivitiesData} from "../../../../Services/Utils/Data/data"
import { useState } from "react";
import { 
  Typography,
      Box,
    
     } from '@mui/material';
 import {teaserBoxHeading,} from "../../../../Styles/Study";
const CurrentActivities = () => {
  const [Info] = useState(CurrentActivitiesData);
  return(
      <>
      <Typography sx={teaserBoxHeading}>Current activities</Typography>
      <Box sx={{
          margin: "15px 0",
          width:" 100%",
         
          overflow: "hidden",
          display: "flex",
          flexWrap:{xs:"wrap",md:"no-wrap",sm:"no-wrap",lg:"no-wrap"},
         alignItems:"stretch",
         
          justifyContent: "space-between",
         
          
          maxWidth: "100%",
      }}>


{Info.map((article) => (
            <ReadArticleCard
            title= {article.title}
            image= {article.image}
            Imagename= {article.Imagename}
            text = {article.text}
            ReadLink={article.ReadLink}
            />
          ))}




          </Box>



      
      </>
  )
  };
  
  export default CurrentActivities;