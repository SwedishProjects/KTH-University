
import ClusterNetwork from "../../Assets/Images/About/clusterNetwork.jpg";
import { useState } from "react";
import { articlesBlogsThree , articlesBlogsTwo , articlesBlogsOne } from "../../Services/Utils/Data/data";
import { CardContent,
   Grid,
    Divider,
     Container ,
     Box,CardMedia,Typography,
     Link,
    } from '@mui/material';

import ArticleCard from './Components/ArticleCard';
import {TextStyle,
  NameStyle,
  linkStyle
} from '../../Styles/Blogs'


const Blogs = () => {
      const [articles1] = useState(articlesBlogsOne);
      const [articles2] = useState(articlesBlogsTwo);
      const [articles3] = useState(articlesBlogsThree);

    return (
    <>
   
        <Box sx={{
              padding: "30px 0 ",
              maxWidth: "100%",
              marginLeft: {xs:"-80px",md:"0",lg:"0"},
        }}>
 <Container sx={{
                    maxWidth: "100%",
                    backgroundColor: "inherit",
                    marginRight:"-65px",
                    
                    marginLeft: "auto",
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
              <Divider sx={{    margin: "15px 0", paddingBottom:"6px",
              width:{xs:"100%",sm:"100%",md:"270px",lg:"270px",}, marginBottom:"25px"
            }} />
        
     
            {articles2.map((article) => (
              <ArticleCard
              title= {article.title}
              image= {article.image}
              Imagename= {article.Imagename}
              text = {article.text}
              links={article.links}
              />
            ))}
             <Divider sx={{    margin: "15px 0", paddingBottom:"6px",marginBottom:"25px",
              width:{xs:"100%",sm:"100%",md:"270px",lg:"270px",},
            }} />
      
       
            {articles3.map((article) => (
              <ArticleCard
              title= {article.title}
              image= {article.image}
              Imagename= {article.Imagename}
              text = {article.text}
              links={article.links}
              />
            ))}
            <Box sx={{ display: 'flex' ,marginRight:"20px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="h2" variant="h2" sx={NameStyle}>
          A part of the Cluster network
          </Typography>
         
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 ,
          width:{xs:"100%",sm:"100%",md:"280px",lg:"280px",},
      }}>
        <CardMedia component='img' image={ClusterNetwork} alt="A part of the Cluster network" sx={{
        width:"100px",height:"100px", marginRight:"10px"
      }}/>
      <Box>
      <Typography variant="body2" sx={TextStyle} component="p">
       European universities enhancing the quality of education and research.
          </Typography>
          <Link
          sx={linkStyle}
         
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           Cluster network
        </Link>
          
      </Box>
        </Box>
      </Box>
  
    </Box>
            </Container>
        </Box>
         
    </>
      );
    };
    
    export default Blogs;