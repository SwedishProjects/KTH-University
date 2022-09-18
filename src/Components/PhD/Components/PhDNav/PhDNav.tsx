import {linkStyle} from "../../../../Styles/Calendar"
import { useState } from "react";
import {PhDNavItem} from "../../../../Services/Utils/Data/data"
import NavLink from '../../../ContactKth/Components/NavLink/NavLink';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import{ Box,
   Link,
    Typography,}  from '@mui/material';

import {mainMenu} from "../../../../Styles/ContactKth"



function PhDNav(){
    const [Item] = useState(PhDNavItem);
    return (
        <>
         <Box sx={mainMenu} >
             <Typography sx={{display:"flex",marginTop:"5px"}}>
         <ArrowBackIosIcon sx={{fontSize:"1rem",}}/>
         <Link
         sx={linkStyle}
         className="PhDLink"
          href=""
          underline="hover"
          variant="subtitle1"
        >
        
            Study at KTH   
        </Link>
        </Typography>
         <Typography sx={{
               
               fontSize:" 1.5rem",
               fontWeight: "600",
               lineHeight: "1.5",
               marginTop:" 0",
               marginBottom:" 14px",
           }}>
         Doctoral studies (PhD)
           </Typography>
             <Typography sx={{
               
                 fontSize:" 1rem",
                 fontWeight: "600",
                 lineHeight: "1.5",
                 marginTop:" 0",
                 marginBottom:" 14px",
             }}>
       Doctoral studies at KTH
             </Typography>
         {Item.map((item) => (
              <NavLink
             
              text = {item.text}
              href={item.href}
             
              />
            ))}
         </Box>
        </>
    )
}

export default PhDNav;