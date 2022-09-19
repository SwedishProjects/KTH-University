import {  Link,Box} from "@mui/material";
import {linkStyle} from '../../../../../../Styles/Blogs'

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
        
         
          variant="subtitle1"
        >
           {link}
        </Link>
      ))}
   </Box>
    
   
  );
}

export default CardLink;
