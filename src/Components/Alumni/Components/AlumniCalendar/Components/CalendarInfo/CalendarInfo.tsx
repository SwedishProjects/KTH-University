

import {CalendarEventInfo , linkStyle,CalendarInfoText} from "../../../../../../Styles/Calendar"
import { CardContent,
    Grid,
     Divider,
      Container ,
      Box,CardMedia,Typography,
      Link,
     } from '@mui/material';



     interface CalendarInfoProps {
       
       date: string;
       location: string;
      }
function  CalendarInfo(props: CalendarInfoProps ){
    return (
        <Box >
            

         <Typography
       variant="body2"
     
       sx={CalendarInfoText}
     
       >
       {props.date}
     </Typography>
     <Box
     sx={{display:"flex",justifyContent:"flex-start",alignItems:"start",}}
     >
       
     <Typography
       variant="body2"
       
       sx={{ float: "left",
       fontWeight: "600",
       fontSize:" 1rem",
       color: "#000",
       lineHeight:" 1.5",
       paddingRight:"0.3rem"
      }}
       >
           Location: 
     
     </Typography>
     <Typography
       variant="body2"
      
       sx={CalendarInfoText}
       >
       {props.location}
     </Typography>
     </Box>
     

            </Box>
        
       );
}
export default CalendarInfo;