
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
    
    
    <Box  sx={{
          marginTop: "40px",
          lineHeight: "1.5",   
    } }>
      <Box sx={{
          display:"flex",justifyContent:"space-between",
      }}>
      {MenuInfo.map((item) => (
        <Box className="LiStyle"> 
      
          
            <Link
            sx={{
                height: "90px",
                fontWeight: "500",
                fontSize: {md:"18px",lg:"20px"},
                marginRight: "30px",
                color: "rgba(0, 0, 0, 0.85)",
                borderBottom: "3px solid white",
                textDecoration:"none",
               
                paddingBottom:"10px",
              
                "&:hover": {
                  borderBottom: "3px solid #006cb7",
                 
                  
                },
            
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
        
            </Box>
                ))}
       
      </Box>


      
    </Box>
  </Box>
        </>
    )
    
}

export default Menu ;