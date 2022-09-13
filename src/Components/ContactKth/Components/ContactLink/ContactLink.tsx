

  
import { Typography, Link, Grid ,Box} from "@mui/material";
import {linkStyle} from '../../../../Styles/Blogs/index'

interface ContactLinkProps {
 
  links: string;
}
function ContactLink({  links }: ContactLinkProps) {
  return (
   <Box>
       
   
        <Link
          sx={linkStyle}
     
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {links}
        </Link>

   </Box>
    
   
  );
}

export default ContactLink;
