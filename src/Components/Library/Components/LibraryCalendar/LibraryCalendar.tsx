

import {LibraryCalendarDate} from "../../../../Services/Utils/Data/data"
import {CalendarHeading ,} from "../../../../Styles/Calendar"
import { useState } from "react";


import CalendarLink from "../../../Calendar/Components/CalendarLink/CalendarLink";
import CalendarBox from "../../../Calendar/Components/CalendarBox/CalendarBox";
import { Typography ,Box} from "@mui/material";

const  LibraryCalendar = () => {
  const [Info] = useState(LibraryCalendarDate);

    return (
    <>
<Box sx={{marginTop:"0px" ,    marginLeft:"5px"}}>
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





<CalendarLink  links="To the calendar"/>

</Box>
    </>
      );
    };
    
    export default  LibraryCalendar;
