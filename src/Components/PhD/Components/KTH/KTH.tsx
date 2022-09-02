
import { Grid, Box, Link , Typography } from '@mui/material';
import {TitrPhD,
    KTHText,
} from "../../../../Styles/PhD" 

import PhDLink from '../PhDLink/PhDLink';

function KTH(){
    return(
        <>
       <Box
       sx={{backgroundColor:"#17a2b8" ,
    marginLeft:{lg:"-16px",xs:"-18px"}
    }}
       >
       <Typography variant="body2" component="p" sx={TitrPhD}>
       Doctoral studies (PhD) at KTH
</Typography>
<Typography variant="body2" component="p" sx={KTHText}>
Pursuing doctoral studies at KTH means devoting yourself to a 
research project under the supervision of an experienced researcher.
 You will follow an individual study plan, take courses within a doctoral 
 programme and write a thesis. 
Doctoral students at KTH are normally employed and earn a monthly salary.
</Typography>

<Typography variant="body2" component="p" sx={KTHText}>
In order to succeed as a doctoral student, you need to be 
goal oriented, driven and willing to take responsibility for 
your own work. Your development goes hand in hand with the progression of 
your research project and coursework.
</Typography>
<Typography variant="body2" component="p" sx={KTHText}>
There are no tuition fees for doctoral studies in Sweden.
</Typography>
<PhDLink links="More about being a doctoral student at KTH" />


{/* -----------------------------------------------------*/}

<Typography variant="body2" component="p" sx={TitrPhD}>
How to become a doctoral student at KTH
</Typography>
<Typography variant="body2" component="p" sx={KTHText}>
KTH recruits only the best candidates for doctoral studies 
and the selection process can be highly competitive. 
Prospective doctoral students apply for vacant positions, 
which are announced nine times a year: in February, March, April, 
May, June, September, October, November and December.
</Typography>
<PhDLink links="The application process" />
<PhDLink links="List of current vacant positions" />

       </Box>
        </>
    )
}

export default KTH;