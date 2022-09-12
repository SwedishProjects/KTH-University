

import {ResearchCalendarDate} from "../../../../Services/Utils/Data/data"
import {CalendarHeading ,} from "../../../../Styles/Calendar"
import { useState } from "react";


import CalendarLink from "../../../Calendar/Components/CalendarLink/CalendarLink";
import CalendarBox from "../../../Calendar/Components/CalendarBox/CalendarBox";
import { Typography ,Box} from "@mui/material";

const  ResearchCalendar = () => {
  const [Info] = useState(ResearchCalendarDate);

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





<CalendarLink  links="Research calendar"/>

</Box>
    </>
      );
    };
    
    export default  ResearchCalendar;
