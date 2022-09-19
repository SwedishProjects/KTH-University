

import { useState } from "react";
import { PhDBlogs } from "../../../../Services/Utils/Data/data";
import {
     Container ,
     Box,
   
    } from '@mui/material';

import ArticleCard from './Components/ArticleCard';



const Blogs = () => {
      const [articles1] = useState(PhDBlogs);
  
    return (
    <>
   
        <Box sx={{
            
              maxWidth: "100%",
              marginLeft:{lg:"-40px"},
           
        }}>
 <Container sx={{
    width:{xs:"100%",sm:"100%",md:"225px",lg:"225px",},
                    maxWidth: "100%",
               
                    
                  padding:"0",
                  paddingLeft:"0",
                 
                    
          }}>


            {articles1.map((article) => (
              <ArticleCard
              title= {article.title}
              image= {article.image}
              Imagename= {article.Imagename}
              text = {article.text}
              links={article.links}
              />
            ))}
         
 

            </Container>
        </Box>
         
    </>
      );
    };
    
    export default Blogs;