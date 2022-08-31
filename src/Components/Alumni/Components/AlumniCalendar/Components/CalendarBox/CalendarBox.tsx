
import CalendarLink from "../CalendarLink/CalendarLink";
import CalendarDate from "../CalendarDate/CalendarDate";
import CalendarInfo from "../CalendarInfo/CalendarInfo";


import { CardContent,
    Grid,
     Divider,
      Container ,
      Box,CardMedia,Typography,
      Link,
     } from '@mui/material';


     interface info {
        links: string;
        day:string;
        month:string;
       
        date: string;
        location: string;
       
       
        
      }

function CalendarBox(props: info){
    return (
        <>
<CalendarLink  links={props.links}/>


    <CalendarDate  day={props.day} month={props.month}/>
    <CalendarInfo  date={props.date} location={props.location} />
    




 <Divider sx={{    marginBottom:"20px", paddingBottom:"6px",
              width:"100%",
              marginTop:"30px"
            
            }} />
        </>
    )

}

export default CalendarBox;


