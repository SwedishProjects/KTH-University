
import { Box,Link} from "@mui/material";
import {navLink} from "../../../../Styles/ContactKth"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface NavLinkProps {
 
   
    href:string;
    text :string;
  }

function NavLink ( NavLinkProps){
  const LinkArrow1 = ((NavLinkProps.text==="Our campuses"  ) )? true : false ;
  const LinkArrow2 = ((NavLinkProps.text==="KTH Entré"  ) )? true : false ;
  const LinkArrow = (LinkArrow1 || LinkArrow2)? true : false ;



    return (
        <>
         
           <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Link
          sx={navLink}
  
          href={NavLinkProps.href}
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
                       {NavLinkProps.text}
                        </Link>
              
            <ArrowForwardIosIcon 
            sx={{
              display:LinkArrow ? "block" : "none",
              fontSize:"1rem",
            }}
            /> 
            </Box>     
        </>
    )
}

export default NavLink;