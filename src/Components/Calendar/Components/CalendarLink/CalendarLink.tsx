import {  Link,Box} from "@mui/material";
import {linkStyle} from '../../../../Styles/Calendar/index'

interface CalendarLinkProps {
 
  links: string;
}
function CalendarLink({  links }: CalendarLinkProps) {
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

export default CalendarLink;
