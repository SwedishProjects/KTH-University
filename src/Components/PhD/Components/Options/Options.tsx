
import { Grid, Box, Link , Typography } from '@mui/material';
import {TitrPhD,
    KTHText,
} from "../../../../Styles/PhD" 

import PhDLink from '../PhDLink/PhDLink';

function Options(){
    return(
        <>
         <Box
       sx={{backgroundColor:"#17a2b8" ,
    marginLeft:{lg:"-16px",xs:"-18px"}
    }}
       >
       <Typography variant="body2" component="p" sx={TitrPhD}>
       Other options for doctoral studies
</Typography>
<Typography variant="body2" component="p" sx={KTHText}>
Apart from being employed and financed by KTH, doctoral/PhD 
student positions may be offered in partnership with industry 
actors or other universities in the following frameworks:
</Typography>
<PhDLink links="Joint programmes" />
<PhDLink links="Scholarship cooperations" />


<Typography variant="body2" component="p" sx={KTHText}>
The conditions and application procedures of these offers differ 
from those of KTH.
 KTH does not offer scholarships to finance doctoral studies.
         </Typography>









{/* -----------------------------------------------------*/}



       </Box>
        </>
    )
}

export default Options;