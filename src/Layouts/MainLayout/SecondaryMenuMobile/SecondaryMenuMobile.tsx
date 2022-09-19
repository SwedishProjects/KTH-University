
import {
    Box,
  
    Link,
   
   
  } from "@mui/material";
  import * as React from 'react';
  import { useState } from "react";

  import {  SecondaryMenuInfo } from "../../../Services/Utils/Data/data";



function SecondaryMenuMobile(){
    const [MenuInfo] = useState(SecondaryMenuInfo);
    return(
        <>
           <Box  
        sx={{
            backgroundColor: "#65656c",
    height: "100%",
    marginTop: "15px",
    paddingTop: "10px",
    paddingBottom: "20px",
    listStyle: "none",
    paddingLeft: "0",
  
        }}
        >
    
    
    <Box id="Secondary top menu" sx={{
      

    listStyleType:" none",
    display:"flex",
    flexDirection:"column",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0.65rem 1.3rem",
    


  


    } }>
  
      {MenuInfo.map((item) => (
    
          
            <Link
            sx={{
             display:"block",
            
             margin: "0 20px 0 0",
             color:" #fff",
             lineHeight: "2",
             fontWeight: "400",
             padding: "8px 4px",
            
            }}
           
            href={item.route}
           
            underline="hover"
            mb={1.5}
           
            variant="subtitle1"
          >
             {item.name}
          </Link>
         ))}
       
   


      
    </Box>
  </Box>
        </>
    )
}


export default SecondaryMenuMobile;