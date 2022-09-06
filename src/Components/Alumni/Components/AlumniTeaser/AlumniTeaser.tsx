
import TeaserAlumni from '../../../../Assets/Images/Alumni/KTHbanner_webb 900.jpg';
import {  Grid, CardMedia, Container ,Box} from '@mui/material';
import StayTouch from './StayTouch/StayTouch';
function AlumniTeaser(){
    return (
    <>


<Box sx={{     maxWidth: "100%",
    height: "auto",    marginBottom: "20px",
    display: "block",width: "auto",
   
    }}>
      <Box>
        <CardMedia
          component="img"
          // height="600"
          // width="1228"
          image={TeaserAlumni}
          alt="Stay in touch with KTH"
          sx={{width:"100%",height:{xs:"auto",lg:"600px"}}}
        />
      {/* <StayTouch /> */}
      </Box>
      
    </Box>
    </>
    )
}

export default AlumniTeaser;