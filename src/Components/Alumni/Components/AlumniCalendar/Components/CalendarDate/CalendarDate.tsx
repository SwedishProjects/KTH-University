import { Typography ,Box} from "@mui/material";
import {CalendarDateText , CalendarDateBox ,CalendarMonthText} from "../../../../../../Styles/Calendar"
interface CalendarDateProps {
  day: string;
 month: string;
}
function CalendarDate({ day,month }: CalendarDateProps) {
  return (
   <Box sx={CalendarDateBox}>
         <Typography
  
      variant="body2"
   
      sx={CalendarDateText}
     
    >
      {day}
    </Typography>
    <Typography
  
  variant="body2"
 
  sx={CalendarMonthText}
 
>
  {month}
</Typography>
       </Box>
   
  );
}

export default CalendarDate;
