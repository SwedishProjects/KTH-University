
import { Box,Link} from "@mui/material";
import {navLink} from "../../../../Styles/ContactKth"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface NavLinkProps {
 
   
    href:string;
    text :string;
  }

function NavLink ( NavLinkProps){
 


  const LinkArrowArray=["Our campuses","KTH Entré" ,"Being a doctoral student","Interviews"]
  function CheckLinkArrow(){
  for (let index = 0; index < LinkArrowArray.length; index++) {
    const   element = ((NavLinkProps.text=== LinkArrowArray[index]  ) )? true : false ;
    if (element===true){
      return element;
    }
  }
 
}

const flag=CheckLinkArrow();


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
              display:flag ? "block" : "none",
              fontSize:"1rem",
            }}
            /> 
            </Box>     
        </>
    )
}

export default NavLink;