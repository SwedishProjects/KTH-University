import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { ContainerStyle } from '../../../../Styles/Container/Container';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const LibraryInfo = () => {
    return (
        <>
            <Box sx={{ margin: { xs: "0 -20px", lg: "0 -10px" } }}>
                <Container sx={{    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    bgcolor: "#ffffff",
    
    maxWidth: "100%",
   
    padding: {xs:"25px",lg:"0 30px"}}} >
                    <Box sx={{ backgroundColor: "#fcf8e3", padding: "30px 10px 30px 20px", }}>
                        <div style={{backgroundColor: "white", }}>
                            <ErrorRoundedIcon sx={{ color: "#fab919", dispaly: "inline-block", float: "left", marginRight: "6px", fontSize: "xx-large" }} />
                        </div>
                        
                        <Typography variant='subtitle1'>Please note that we currently have irregular manned hours in Södertälje, and sometimes Kista, due to a lack of staff. Contact us through our chat before you visit the libraries to make sure there is staff on site. Read more at Opening hours and contact .</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default LibraryInfo