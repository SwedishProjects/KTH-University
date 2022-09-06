
import {AlumniButton,
    teaserBox ,
    teaserBoxHeaderWrap,
    teaserBoxHeader ,
    teaserBoxHeading ,
    teaserBoxBody,

} from "../../../../../Styles/Alumni"
import {   Typography, Link,Box} from '@mui/material';
function StayTouch (){
    return (
        <>

<Box sx={teaserBox}>
        <Box sx={teaserBoxHeaderWrap}>
          <Box sx={teaserBoxHeader}>
              </Box>
        </Box>

              <Typography sx={teaserBoxHeading }>Stay in touch with KTH</Typography>
   

        <Box>
          <Typography sx={teaserBoxBody}>
As a KTH-alum you are part of a global network of 100 000 alumni in more than 100 countries. Join the alumni network and stay connected with KTH and fellow alumni worldwide.</Typography><Typography>
        </Typography></Box>
        <Box>
          <Typography> <Link underline="none"sx={AlumniButton} href="" target="_blank">Join the Alumni Network</Link> </Typography>
        </Box>
        </Box>
        </>

    )
}

export default StayTouch;