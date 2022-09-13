import {ReadArticleData} from "../../Services/Utils/Data/data";

import ReadArticleCard from "./Components/ReadArticleCard/ReadArticleCard";
import { useState } from "react";
import { 
   
      Box,
    
     } from '@mui/material';


function ReadArticle(){
    const [Info] = useState(ReadArticleData);
    return(
        <>
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
              use=" "
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

}



export default ReadArticle;