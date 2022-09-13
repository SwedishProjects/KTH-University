

import {CalendarEventInfo , linkStyle,CalendarInfoText} from "../../../../Styles/Calendar"
import { 
      Box,Typography,
      Link,
     } from '@mui/material';



     interface CalendarInfoProps {
        title: string;
       date: string;
       location: string;
      }
function  CalendarInfo(props: CalendarInfoProps ){
    return (
        <Box
        sx={{
       
        width:(props.title==="Public defences of doctoral theses") ?{xs:"60%",lg:"100%"} : "100"
     
       }}
        >
              <Typography
       sx={CalendarEventInfo}
           variant="body2"
           >{props.title}</Typography>

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
     
     <Box
     sx={{display:(props.title==="Public defences of doctoral theses") ? "flex" :"none",
   
     marginLeft:{xs:"-30px",sm:"0",md:"0",lg:"0"},
    

  
    }}
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
         Doctoral student: 
     
     </Typography>
     <Link
          sx={linkStyle}
        
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           Sen Lin
        </Link>
     <Typography
       variant="body2"
      
       sx={CalendarInfoText}
       >
     , Egenskaper, Materials Characterization
     </Typography>
     </Box>

            </Box>
        
       );
}
export default CalendarInfo;