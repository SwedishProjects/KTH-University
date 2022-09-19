
import { Box , Typography } from '@mui/material';
import {TitrPhD,
    KTHText,
} from "../../../../Styles/PhD" 

import PhDLink from '../PhDLink/PhDLink';

function Admission(){
    return(
        <>
         <Box
       sx={{
    marginLeft:{lg:"-16px",xs:"-18px"}
    
    }}
       >
       <Typography variant="body2" component="p" sx={TitrPhD}>
       Admission requirements
</Typography>
<Typography variant="body2" component="p" sx={KTHText}>
Students eligible for doctoral education must meet the 
following general admission requirements:
</Typography>
<ul>
<Typography variant="body2" component="p" sx={KTHText}>
    <li>a degree at the advanced (master's) level, or</li>
    <li>at least four years of previous university studies 
        corresponding to 240 ECTS credits, of which at least one 
        year corresponding to 60 ECTS credits
         must be at the advanced (master's) level</li>
         </Typography>

</ul>

<Typography variant="body2" component="p" sx={KTHText}>
In addition, specific requirements are connected to each 
position. These are outlined in the vacancy announcements
and may relate to additional knowledge from higher education,
 professional experience, necessary language skills and other 
conditions. Specific English language requirements apply, see
<PhDLink links="Admission requirements." />
</Typography>




{/* -----------------------------------------------------*/}



       </Box>
        </>
    )
}

export default Admission;