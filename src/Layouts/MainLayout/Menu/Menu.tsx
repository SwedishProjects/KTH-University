
import {
    Box,
  
    Link,
    Typography,
   
  } from "@mui/material";
  import * as React from 'react';
  import { useState } from "react";

  import {  navbarItems } from "../../../Services/Utils/Data/data";

  import {listStyle} from '../../../Styles/Appbar';

function  Menu() {

    const [MenuInfo] = useState(navbarItems);
    return (
        <>
        <Box  data-cid="1.865038" lang="en-GB"
        sx={{diplay:"block"}}
        >
    
    
    <Box id="Secondary top menu" sx={listStyle }>
      <ul className="UlStyle">
      {MenuInfo.map((item) => (
        <li className="LiStyle"> 
      
          
            <Link
            sx={{
              color: "#000",
              fontSize: "1rem",
            
            }}
           
            href={item.route}
           
            underline="hover"
            mb={1.5}
           
            variant="subtitle1"
          >
             {item.name}
          </Link>
          
      <Typography sx={{
        display: item.name==="Staff" ? "inline-block" : "none",
        paddingLeft:"12px"
      }}> |</Typography>
        
            </li>
                ))}
       
      </ul>


      
    </Box>
  </Box>
        </>
    )
    
}

export default Menu ;