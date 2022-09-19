
import {  Box , Typography } from '@mui/material';
import {TitrPhD,
    KTHText,
} from "../../../../Styles/PhD" 

import PhDLink from '../PhDLink/PhDLink';

function Degrees(){
    return(
        <>
         <Box
       sx={{
    marginLeft:{lg:"-16px",xs:"-18px"}
    }}
       >
       <Typography variant="body2" component="p" sx={TitrPhD}>
       Degrees
</Typography>
<Typography variant="body2" component="p" sx={KTHText}>
KTH issues the following degrees at the doctoral level:
</Typography>
<ul>
<Typography variant="body2" component="p" sx={KTHText}>
    <li>Doctor of Philosophy (four years of full-time study)</li>
    <li>Licentiate of Engineering
         (possible intermediate degree; two years of full-time study)</li>
         </Typography>

</ul>

<PhDLink links="More about examination and degrees" />







       </Box>
        </>
    )
}

export default Degrees;