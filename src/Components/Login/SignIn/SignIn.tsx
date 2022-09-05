
import {content,header,LogoImg,workArea,
  groupMargin,
} from "../../../Styles/Login"
import {
  Box,
 
  CardMedia,
} from "@mui/material";
import images from "../../../Importer/Importer"
import LinkBox from "../LinkBox/LinkBox";
import SignInButton from "../SignInButton/SignInButton";
import FormCheckbox from "../FormCheckbox/FormCheckbox";
import Input from "../Input/Input";
import BackButton from "../BackButton/BackButton";
function SignIn(){
    return(
        <>
<Box sx={content}>
    <Box sx={header}>
   
        <CardMedia
          component="img"
      
        sx={LogoImg}
          image={images['Login/logo.png']}
          alt="KTH logo"
        />
    </Box>
    {/* --------main---------- */}
    <Box>
    <Box sx={workArea}>
    <Box sx={groupMargin}>
      <Box>
   
    
     
           <Input title="Sign in" place="Enter your KTH username"/>
                
           <FormCheckbox />
<Box sx={{
  marginTop:{xs:"60px"},

}}>
{/* <SignInButton  title="Next"/> */}
<BackButton  />


</Box>
    
        <LinkBox />
      </Box>

</Box >
</Box >
    </Box>

</Box>


        </>
    )
}


export default SignIn;