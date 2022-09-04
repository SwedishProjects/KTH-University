
import {content,header,LogoImg,workArea,
  groupMargin,loginText,
} from "../../../Styles/Login"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
import images from "../../../Importer/Importer"


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
      <FormLabel
                color="primary"
                sx={{ fontSize: "15px", color: "#333333", display: "flex" }}
              >
                Your Email
                <Typography
                  component={"span"}
                  sx={{ color: "#f03637", marginLeft: "2px" }}
                >
                  *
                </Typography>
              </FormLabel>
      <TextField
                placeholder="Your Email"
                // sx={inputStyles}
                // value={enteredEmail}
                // onChange={(e) => setEnteredEmail(e.target.value)}
                // onBlur={() => setEmailTouched(true)}
              />
                <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#f03637",
                      "&.Mui-checked": {
                        color: "#f03637",
                      },
                    }}
                  />
                }
                label="Also subscribe us"
              />
            </FormGroup>
            <Button
              variant="contained"
              sx={{ width: { xs: "100%", sm: "35%" }, height: "50px" }}
            >
              Send Message
            </Button>
        </form>
      </Box>

</Box >
</Box >
    </Box>

</Box>


        </>
    )
}


export default SignIn;