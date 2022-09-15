import { useState } from "react";

import Buttons from "../Buttons/Buttons";
import { Grid, CardActionArea, Container, Box } from '@mui/material';

const ButtonTitle = [
 { 
   title:"My library account",
   href:"https://www.kth.se/en/biblioteket/anvanda-biblioteket/mitt-bibliotekskonto-1.853001"
  
  },
  { 
    title:"Request materials",
    href:"https://www.kth.se/en/biblioteket/anvanda-biblioteket/bestall-material-1.869094"

  },



  { 
    title:"Book a group study room",
    href:"http://apps.lib.kth.se/mrbsgrupprum?lang=en&room=2"

  },
  { 
    title:"Talking books",
    href:"https://www.kth.se/en/biblioteket/anvanda-biblioteket/talbocker"

  },
 
];
const LibraryButton = () => {
  const [title] = useState(ButtonTitle);
  return (
    <>
    <Grid
            container
            height="100%"
            display="flex"
            justifyContent="space-around"
            alignItems="flex-start"
            sx={{
              flexWrap: "wrap",
              flexGrow: "1",
           margin:"40px 0"

            }}
          >
 {title.map((button) => (
   <Grid item xs={12} sm={12} md={3} lg={3}>
              <Buttons
              href= {button.href}
    title ={button.title}
              />
               </Grid>
              
            ))}
             </Grid>
             



    </>
  );
};

export default LibraryButton;

