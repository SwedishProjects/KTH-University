

import { useState } from "react";
import { PhDBlogs } from "../../../../Services/Utils/Data/data";
import { CardContent,
 
    Divider,
     Container ,
     Box,CardMedia,Typography,
     Link,
    } from '@mui/material';

import ArticleCard from './Components/ArticleCard';



const Blogs = () => {
      const [articles1] = useState(PhDBlogs);
  
    return (
    <>
   
        <Box sx={{
              // padding: "30px 0 ",
              maxWidth: "100%",
              marginLeft:{lg:"-40px"},
           
        }}>
 <Container sx={{
    width:{xs:"100%",sm:"100%",md:"225px",lg:"225px",},
                    maxWidth: "100%",
                    backgroundColor: "inherit",
                    // backgroundColor: "#c1c1c1",
                  padding:"0",
                  paddingLeft:"0",
                 
                    // marginLeft: {xs:"0",sm:"0",md:"85px",lg:"85px",},
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