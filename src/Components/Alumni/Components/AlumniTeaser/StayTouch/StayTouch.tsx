
import {AlumniButton,
    TeaserBox ,
    teaserBoxHeaderWrap,
    teaserBoxHeader ,
    TeaserBoxHeading ,
    teaserBoxBody,

} from "../../../../../Styles/Alumni"
import {   Typography, Link,Grid, CardMedia, Container ,Box} from '@mui/material';
function StayTouch (){
    return (
        <>

<TeaserBox>
        <Box sx={teaserBoxHeaderWrap}>
          <Box sx={teaserBoxHeader}>
              </Box>
        </Box>

              <TeaserBoxHeading>Stay in touch with KTH</TeaserBoxHeading>
   

        <Box>
          <Typography sx={teaserBoxBody}>
As a KTH-alum you are part of a global network of 100 000 alumni in more than 100 countries. Join the alumni network and stay connected with KTH and fellow alumni worldwide.</Typography><Typography>
        </Typography></Box>
        <Box>
          <Typography> <Link underline="none"sx={AlumniButton} href="" target="_blank">Join the Alumni Network</Link> </Typography>
        </Box>
        </TeaserBox>
        </>

    )
}

export default StayTouch;