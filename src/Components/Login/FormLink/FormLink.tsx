
import { Typography, Link, Grid ,Box} from "@mui/material";
import { linkStyle} from '../../../Styles/Login'



type props = {
  text: string;
  links :string ;

};

const FormLink = ({text  , links}: props) => {
  return (
    <Box >
         <Typography
         sx={{display:"flex" ,justifyContent:"flex-start",}}
         >
    <Typography
    sx={{  marginBottom: "0px",
    // marginTop:" 35px",
    fontSize:  {xs:"20px",lg:"small"},}}
      variant="body2"
      mb={2.5}
     
     
    >
      {text }
    </Typography>
    <Typography
    // sx={{}}
      variant="body2"
   
    >
   
    </Typography>
    <Link
          sx={linkStyle}
   
          href="#"
         
          underline="hover"
         
         
          variant="subtitle1"
        >
           {links}
        </Link>
        </Typography>
    </Box>
   
  );
};

export default FormLink;
