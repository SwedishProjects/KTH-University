import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { LibraryInfoContainer, LibraryInfoBox, InfoIcon, InfoBox } from '../../../../Styles/Library';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const infoText = "Please note that we currently have irregular manned hours in Södertälje, and sometimes Kista, due to a lack of staff. Contact us through our chat before you visit the libraries to make sure there is staff on site. Read more at Opening hours and contact ."

const LibraryInfo = () => {
    return (
        <>
            <Box sx={ InfoBox }>
                <Container sx={LibraryInfoContainer} >
                    <Box sx={ LibraryInfoBox }>
                        <div style={{ backgroundColor: "white", }}>
                            <ErrorRoundedIcon sx={ InfoIcon } />
                        </div>
                        <Typography variant='subtitle1'>{ infoText }</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default LibraryInfo