import ClearIcon from '@mui/icons-material/Clear';
import { CardContent,
     Box,
     Link,
   
    } from '@mui/material';
import SignIn from './SignIn/SignIn';
    import {FullPage,
        brandingWrapper,
        branding,
        brandingTint,
        contentWrapper,
    } from "../../Styles/Login"
function Login (){
    return (
        <>
<Box sx={FullPage}>
<Box sx={brandingWrapper}>
    <Box sx={branding}>
    <Box sx={brandingTint}>
    <Box sx={contentWrapper}>
        <Link href="/" sx={{
             position: "fixed",
             zIndex: "25",
             top: {xs:"20px",sm:"50px",md:"30px",lg:"30px",},
             right: "15px",
             padding: "5px 15px 15px",
        
           fontSize:"32px",
             transform: "rotate(0)",
             transition: ".3s ease-in-out",
             cursor: "pointer",
         color:"#000"
        }}>
      <ClearIcon />
            </Link>
        
<SignIn />
</Box>
</Box>
    </Box>
    </Box>
    </Box>


        </>
    )
}



export default Login;