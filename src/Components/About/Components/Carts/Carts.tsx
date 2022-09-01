
import ClusterNetwork from "../../Assets/Images/About/clusterNetwork.jpg";
import { useState } from "react";
import {CardsInfo1 ,
   CardsInfo2,
   CardsInfo3
  } from '../../../../Services/Utils/Data/data'
import { CardContent,
   Grid,
    Divider,
     Container ,
     Box,Card,CardMedia,Typography,
     Link,
    } from '@mui/material';

import AboutCart from "../AboutCart/AboutCart";



const Cards = () => {
      const [Info1] = useState(CardsInfo1);
      const [Info2] = useState(CardsInfo2);
      const [Info3] = useState(CardsInfo3);
      

    return (
    <>
    <Grid container spacing={2}>
         
   {Info1.map((cart) => (
      <Grid item xs={12} md={6}>
              <AboutCart
              title= {cart.title}
              image= {cart.image}
              Imagename= {cart.Imagename}
              text = {cart.text}
              links={cart.links}
              />
                   </Grid>
            ))}



</Grid>

<Grid container spacing={2}>
         
         {Info2.map((cart) => (
            <Grid item xs={12} md={6}>
                    <AboutCart
                    title= {cart.title}
                    image= {cart.image}
                    Imagename= {cart.Imagename}
                    text = {cart.text}
                    links={cart.links}
                    />
                         </Grid>
                  ))}
      
      
      
      </Grid>


      <Grid container spacing={2}>
         
         {Info3.map((cart) => (
            <Grid item xs={12} md={6}>
                    <AboutCart
                    title= {cart.title}
                    image= {cart.image}
                    Imagename= {cart.Imagename}
                    text = {cart.text}
                    links={cart.links}
                    />
                         </Grid>
                  ))}
      
      
      
      </Grid>
       
         
    </>
      );
    };
    
    export default Cards;