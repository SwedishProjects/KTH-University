
import images from "../../../../Importer/Importer"
import {linkStyle} from '../../../../Styles/Blogs/index'
import {EventsCardBox,EventsCardContentBox,EventsImage} from "../../../../Styles/CoOperation"
import {Typography , CardContent,Link ,Box,CardMedia} from '@mui/material';






const NewsEvents = () => {

  
    return (
     <>

<Typography component="h2" variant="h4" sx={{margin:"20px 0",fontWeight:"600"}}>
News and events
          </Typography>
         <Box sx={EventsCardBox}>
      <Box sx={EventsCardContentBox}>
        <CardContent sx={{ flex: '1 0 auto' ,padding:"30px"}}>
          <Typography component="h2" variant="h4" sx={{marginBottom:"20px"}}>
          “Collaboration skills ought to be more highly valued”
          </Typography>
          <Typography variant="subtitle1" color="#000" component="div" sx={{marginBottom:"20px"}}>
          We would all benefit from more and varied exchanges between academia 
          and the society around us and this would help drive societal development forwards.
           External engagement and collaboration ought therefore to be more highly valued, 
           says Mikael Östling,
           Deputy President and responsible for strategic collaboration at KTH.
          </Typography>
          <Link
          sx={linkStyle}
         
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
          To the article
        </Link>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        sx={EventsImage}
        image={images['CoOperation/ostlingtopp_start.jpg']}
        alt="News and events"
      />
    </Box>
     </>
      );
    };
    
    export default NewsEvents;