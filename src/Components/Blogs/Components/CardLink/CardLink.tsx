import { Typography, Link, Grid ,Box} from "@mui/material";
import {linkStyle} from '../../../../Styles/Blogs/index'

interface CardLinkProps {
 
  links: string[];
}
function CardLink({  links }: CardLinkProps) {
  return (
   <Box>
       
      {links.map((link, index) => (
        <Link
          sx={linkStyle}
          key={index}
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {link}
        </Link>
      ))}
   </Box>
    
   
  );
}

export default CardLink;
