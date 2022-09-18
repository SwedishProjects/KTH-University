
import CalendarLink from "../CalendarLink/CalendarLink";
import CalendarDate from "../CalendarDate/CalendarDate";
import CalendarInfo from "../CalendarInfo/CalendarInfo";


import { 
     Divider,
      Box,
  
     } from '@mui/material';


     interface info {
        links: string;
        day:string;
        month:string;
        title: string;
        date: string;
        location: string;
       
       
        
      }

function CalendarBox(props: info){
    return (
        <>
<CalendarLink  links={props.links}/>

<Box
     sx={{display:"flex",justifyContent:"flex-start",alignItems:"start",}}
     >
    <CalendarDate  day={props.day} month={props.month}/>
  
          <CalendarInfo title={props.title} date={props.date} location={props.location} />
   
  
    

</Box>


 <Divider sx={{    marginBottom:"20px", paddingBottom:"6px",
              width:"100%",
              marginTop:"30px"
            
            }} />
        </>
    )

}

export default CalendarBox;


