



import * as React from 'react';

import { useState } from "react";
import  {ExploreCardData}  from '../../Services/Utils/Data/data';
import {  Container
} from "@mui/material";


import ExploreCard from './Components/ExploreCard/ExploreCard';




const Explore = () => {

  const [Cards] = useState(ExploreCardData);

    return (
    <>
  
          <Container
      sx={{
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#ffffff",
        maxWidth: "100%",
      
 
       width:"100%",
      
      padding:"0",
        
      }}
    >
       {Cards.map((card) => (
              <ExploreCard
              title= {card.title}
              image= {card.image}
              Imagename= {card.Imagename}
              text = {card.text}
              link={card.link}
              />
            ))}
    </Container>
    </>
      );
    };
    
    export default Explore;