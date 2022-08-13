
import {
    Box,
    Divider,
    FormControl,
    InputBase,
    MenuItem,
    Link,
   
  } from "@mui/material";
  import * as React from 'react';
  import { useState } from "react";

  import {  SecondaryMenuInfo } from "../../../../Services/Utils/Data/data";

  import {listStyle} from '../../../../Styles/Appbar';

function  SecondaryMenu() {

    const [MenuInfo] = useState(SecondaryMenuInfo);
    return (
        <>
        <Box  data-cid="1.865038" lang="en-GB"
        sx={{diplay:{xs:"none",md:"none",lg:"inline-block",}}}
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
        
        
            </li>
                ))}
       
      </ul>


      
    </Box>
  </Box>
        </>
    )
    
}

export default SecondaryMenu ;