
import {
    Typography,
    Box,
    Container,
    Modal,
  } from "@mui/material";

  import { kpmloginhelp ,
    loginContent ,
    kpmloginhelpText ,

} from '../../../../Styles/Appbar'
    function TopNavbarModal (){
        return(
            <>
    <Box sx={kpmloginhelp}  >
    <Box 
    sx={{
        position: "absolute",
        right: "0",
   
     
    }}>
	
    <Typography variant="body2" sx={kpmloginhelpText}>
    Log in here if you are a student or employed at KTH
    </Typography>
    </Box>
    </Box> 



    
            </>
        )
    }
    export default TopNavbarModal 