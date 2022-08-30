
import { useState } from "react";

import  {MoreNewsData}  from '../../Services/Utils/Data/data';
import ReadArticle from "../ReadArticle/ReadArticle";
import { Typography, Link, Grid ,Box ,Container,Divider
} from "@mui/material";

import { useTheme } from '@mui/material/styles';
import {ButtonStyle , TitleStyle} from '../../Styles/MoreNews/index'
import MoreNewsCard from './Components/MoreNewsCard/MoreNewsCard';
const MoreNews = () => {
  const [Cards] = useState(MoreNewsData);

  return (
  <>
 <Container
      sx={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
       
        backgroundColor: "#f6f6f6",marginTop:"30px",
        width:{sm:"100%",md:"831px",lg:"831px",},
        
        maxWidth: "100%",
      

        marginLeft:"5px"
  
       
        
      }}
    >
      <Box sx={{
        marginTop:"30px",
      }}>

      <Typography component="h2" variant="h2" sx={TitleStyle}>
      NEWS FROM KTH
          </Typography>
      <Link
          sx={ButtonStyle}
       
          href="#"
         
          underline="none"
          mb={1.5}
         
          variant="subtitle1"
        >
     MORE NEWS
        </Link>
        </Box>
        <Divider sx={{    margin: "15px 0", paddingBottom:"6px",marginBottom:"25px",
              width:{xs:"100%",sm:"100%",md:"800px",lg:"800px", },color:"#fff",
            }} />
       {Cards.map((card) => (
              <MoreNewsCard
              title= {card.title}
              image= {card.image}
              Imagename= {card.Imagename}
              text = {card.text}
              link={card.link}
              />
            ))}
           <Box>
           <ReadArticle />
           </Box>


    </Container>
  </>
    );
  };
  
  export default MoreNews;