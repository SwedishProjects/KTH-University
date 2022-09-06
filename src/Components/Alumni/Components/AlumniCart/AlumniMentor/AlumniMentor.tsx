import {TextStyle , } from '../../../../../Styles/Alumni'

import {  Link, Typography, Container ,Box} from '@mui/material';
const linkStyle={
    fontSize: "1rem",
    fontWeight:" 400",
    lineHeight: "1.5",
    marginTop: "0",
    marginBottom: "0",
    color:" #006cb7",
    backgroundColor: "transparent",
    
}
function AlumniMentor(){
    return(
        <>
         
        <Typography
    sx={TextStyle}
      variant="body2"
  
    >
      Read interviews with mentor pairs 

       <Link
          sx={linkStyle}
          href="#"
          underline="hover"
 variant="subtitle1"
        >
         Jerry Onyeche and Marina Brandt
        </Link>
      
    as well as

        <Link
          sx={linkStyle}
          href="#"
          underline="hover"
 variant="subtitle1"
        >
         Amanda Sterner Nordin and Navita Hassan
        </Link>
        </Typography>
 
        </>
    )

}

export default AlumniMentor;