
import { Typography, Link, Grid ,Box} from "@mui/material";
import {AlumniCalendar} from "../../../../Services/Utils/Data/data";
import {CalendarHeading , linkStyle ,CalendarInfoText} from "../../../../Styles/Calendar"
import { useState } from "react";


import CalendarLink from "./Components/CalendarLink/CalendarLink";
import CalendarBox from "./Components/CalendarBox/CalendarBox";

const Calendar = () => {
  const [Info] = useState(AlumniCalendar);

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
             
              day= {calendar.day}
               month= {calendar.month}
              date = {calendar.date}
              location={calendar.location}
              />
              
            ))} 






<CalendarLink  links="See whats happening for alumni"/>

</Box>
    </>
      );
    };
    
    export default Calendar;