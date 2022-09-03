
import { useState } from "react";
import {AlumniCarteData} from "../../../../Services/Utils/Data/data"
import {
  
      Box,
     
     } from '@mui/material';
import ArticleCard from "./ArticleCard/ArticleCard";
     

function AlumniCart(){
    const [articles] = useState(AlumniCarteData);
    return (
        <>
<Box>
    
{articles.map((article) => (
              <ArticleCard
              title= {article.title}
              image= {article.image}
              Imagename= {article.Imagename}
              text = {article.text}
              links={article.links}
              />
            ))}
</Box>

        </>
    )
}


export default AlumniCart;