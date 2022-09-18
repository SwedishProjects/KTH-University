import { Typography,Box } from '@mui/material';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import {RoundedIconStyle,}from "../../../../Styles/Library"

const LibraryInfo = () => {
    return (
        <>
    <Box sx={{ backgroundColor: "#fcf8e3", padding: "30px 10px 30px 20px", }}>
    <div style={{backgroundColor: "white", }}>
    <ErrorRoundedIcon sx={RoundedIconStyle} />
                        </div>
                        
 <Typography variant='subtitle1'>Please note that we currently 
                        have irregular manned hours in Södertälje, and sometimes Kista, 
                        due to a lack of staff. Contact us through our chat before you visit
                         the libraries to make sure there is staff on site. Read more at 
                         Opening hours and contact .</Typography>
</Box>
            
           
        </>
    )
}

export default LibraryInfo