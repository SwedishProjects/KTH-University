
import { CardContent,
     Box,
   
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