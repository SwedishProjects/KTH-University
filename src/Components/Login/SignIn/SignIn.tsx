
import {content,header,LogoImg,workArea,
  groupMargin,loginText,inputText,submit,inputCheckBox
} from "../../../Styles/Login"
import {
  Box,

  Checkbox,

  FormControlLabel,
  FormGroup,
 

  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
import images from "../../../Importer/Importer"
import LinkBox from "../LinkBox/LinkBox";
import SignInButton from "../SignInButton/SignInButton";


function SignIn(){
    return(
        <>
<Box sx={content}>
    <Box sx={header}>
   
        <CardMedia
          component="img"
        //   height="271"
        //   width="1228"
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
      <Typography
      sx={loginText}
        variant="h2"
      >
 Sign in
      </Typography>
      <form >
     
      <TextField
                placeholder="Enter your KTH username"
                sx={inputText}
                // value={enteredEmail}
                // onChange={(e) => setEnteredEmail(e.target.value)}
                // onBlur={() => setEmailTouched(true)}
              />
                <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // defaultChecked
                    sx={inputCheckBox}
                  />
                }
                label="Keep me signed in"
              />
            </FormGroup>
           
<SignInButton />
        </form>
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