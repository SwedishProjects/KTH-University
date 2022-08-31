
import { Typography, Link, Grid ,Box} from "@mui/material";
import {HomeCalendar} from "../../Services/Utils/Data/data";
import {CalendarHeading , linkStyle ,CalendarInfoText} from "../../Styles/Calendar"
import { useState } from "react";


import CalendarLink from "./Components/CalendarLink/CalendarLink";
import CalendarBox from "./Components/CalendarBox/CalendarBox";

const Calendar = () => {
  const [Info] = useState(HomeCalendar);

    return (
    <>
<Box sx={{marginTop:"20px" ,    marginLeft:"5px"}}>
<Typography
  variant="body2"
  mb={2.5}
  sx={CalendarHeading}>
    Calendar
</Typography>


 {Info.map((calendar) => (
              <CalendarBox
              links={calendar.links}
              title= {calendar.title}
              day= {calendar.day}
               month= {calendar.month}
              date = {calendar.date}
              location={calendar.location}
              />
              
            ))} 




{/* 
<CalendarBox
              links="Walk in the Pride parade with Academic Pride!"
              title= "Miscellaneous"
              day= "6"
               month= "Aug"
              date = "Saturday 2022-08-06, 11:30 - 16:00"
              location=" Rotundan, Stockholm University"
              /> */}

<CalendarLink  links="More events on KTH"/>

</Box>
    </>
      );
    };
    
    export default Calendar;