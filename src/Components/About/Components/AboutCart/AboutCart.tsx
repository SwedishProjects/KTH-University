import * as React from 'react';


import {
   CardMedia,
    CardActionArea,
  Card ,
  CardContent,
  Typography,
   Box ,
  } from '@mui/material';
import Link from '@mui/material/Link';
import {CartTitle,LinkStyle,cartContentStyle,
  gainedHeadStyle ,

} from '../../../../Styles/About/index';

interface info {
  title: string;
  image: string;
  Imagename: string;
  text : string;
  links: string[];
  
}



function AboutCart(props: info) {
  
  const Annual = ((props.title==="KTH's Annual Report 2021"  ) )? true : false ;
  const gained = ((props.title==="KTH has gained HR Excellence in Research accreditation"  ) )? true : false ;
  const trueAriticle = (gained || Annual)? true : false ;

  return (
    <>


          <Box 
          sx={{
            height: "calc(100% - 30px)",
            margin: "0 0 30px",
            // marginRight:"20px",
            display: "block",
            backgroundColor:trueAriticle ? "#fff" : "#f6f6f6",
            border:trueAriticle ? "1px solid #d4d4d4" : "none",
            width: "100%",
            boxSizing:" border-box",
            paddingBottom:"20px",
            

          }}
          >
      <Box >
        <CardMedia
          component="img"
          height="auto"
          width="100%"
          image={props.image}
          alt={props.Imagename}
         
        />
        <Box sx={{padding:"0 35px"}}>


        <Box
          sx={{
          
            display:gained ? "block" : "none",
         
          }}
        >
        <Typography variant="body2" component="p" sx={gainedHeadStyle}>
        EU CHARTER &#38; CODE
          </Typography>
        </Box>
        <Typography variant="h2" component="h2" sx={CartTitle}>
        {props.Imagename}
          </Typography>
          <Typography variant="body2" component="p" sx={cartContentStyle}>
        {props.text}
          </Typography>
          {props.links.map((link, index) => (
          <Link href="#" underline="hover"   key={index} sx={LinkStyle}>
         {link}
      </Link>
           ))}
        </Box>
      </Box>
     
    </Box> 


    
    </>
  );
}

export default AboutCart;
