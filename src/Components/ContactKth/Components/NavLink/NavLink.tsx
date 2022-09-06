
import { Box, Container ,Grid ,Link} from "@mui/material";
import {navLink} from "../../../../Styles/ContactKth"
interface NavLinkProps {
 
   
    href:string;
    text :string;
  }

function NavLink ({  href , text }: NavLinkProps){
    return (
        <>
         
                <li >
                <Link
          sx={navLink}
  
          href={href}
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
                       {text}
                        </Link>
                    </li>
               
                
        </>
    )
}

export default NavLink;