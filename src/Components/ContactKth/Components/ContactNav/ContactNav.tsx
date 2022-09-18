import {linkStyle} from "../../../../Styles/Calendar"
import { useState } from "react";
import {ContactNavItem} from "../../../../Services/Utils/Data/data"
import NavLink from '../NavLink/NavLink';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import{ Box,
   Link,
    Typography,}  from '@mui/material';

import {mainMenu} from "../../../../Styles/ContactKth"



function ContactNav(){
    const [Item] = useState(ContactNavItem);
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
              About KTH     
        </Link>
        </Typography>
       

         <Typography sx={{
               
               fontSize:" 1.5rem",
               fontWeight: "600",
               lineHeight: "1.5",
               marginTop:" 0",
               marginBottom:" 14px",
           }}>
          Contact
           </Typography>
             <Typography sx={{
               
                 fontSize:" 1rem",
                 fontWeight: "600",
                 lineHeight: "1.5",
                 marginTop:" 0",
                 marginBottom:" 14px",
             }}>
             Contact KTH
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

export default ContactNav;