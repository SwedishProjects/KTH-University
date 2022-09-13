import { Typography, Link, Grid ,Box} from "@mui/material";
import {linkStyle} from '../../../../Styles/Blogs/index'

interface ContactBoldTextProps {
 text : string;

}
function ContactBoldText({text  }: ContactBoldTextProps) {
  return (

  
    <Typography
    sx={{
        marginTop: "28px",
        marginBottom: "14px",
        fontSize: "1.875rem",
        fontWeight:" 600",
        color:" #000",
        lineHeight: "1.3475",
    }}
      variant="body2"
      mb={2.5}
     
     
    >
      {text}
    </Typography>
   
    
   
  );
}

export default ContactBoldText;
