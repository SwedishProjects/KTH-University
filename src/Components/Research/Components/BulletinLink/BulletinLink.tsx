import { Typography, Link,Divider ,Box} from "@mui/material";
import {linkStyle,TextStyle} from '../../../../Styles/BulletinLink/index'

interface CardLinkProps {
    date: string;

  links: string;
}
const BulletinLink = ({ date, links }: CardLinkProps) => {
    return (
    <>
  
    
        <Link
          sx={linkStyle}
        
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {links}
        </Link>

        <Typography
    sx={TextStyle}
      variant="body2"
      mb={2.5}
     
     
    >
      {date}
    </Typography>
        <Divider sx={{    margin: "15px 0", paddingBottom:"6px",
              width:"100%", marginBottom:"25px"
            }} />
    </>
    );
  };
  
  export default BulletinLink;