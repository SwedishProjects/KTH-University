
import { Grid, Box, Typography } from '@mui/material';
import {HeadPhD,
    HeadPhDText,
} from "../../../../Styles/PhD" 
import KTH from '../KTH/KTH';
import Admission from '../Admission/Admission';

import Blogs from '../Blogs/Blogs';
import NationalInformation from '../NationalInformation/NationalInformation';

function DoctoralStudies(){
    return(
        <>
       <Box
       sx={{
       
    marginLeft:{lg:"-16px",xs:"-18px" ,},
    marginTop:{lg:"-16px"}
    }}
       >
       <Typography variant="body2" component="p" sx={HeadPhD}>
        Doctoral studies (PhD)
</Typography>
<Typography variant="body2" component="p" sx={HeadPhDText}>
KTH Royal Institute of Technology offers the opportunity to complete
 a doctoral degree (PhD) in a dynamic, international research environment 
 that features world-class facilities as well as close collaboration with
  industry and other prominent universities worldwide. Being the largest
   and highest ranked technical university in Sweden,
 KTH provides excellent conditions for its 2,000 doctoral students.
</Typography>

{/* //////////////////////////////////////////////// */}

<Grid container spacing={2} sx={{display:"flex" ,
         justifyContent:"space-between" , 
         marginLeft:"0",
        
         width:"100%",
      boxSizing:"border-box",

      
      }}>
      <Grid item xs={12} sm={12} md={7} lg={8.6} sx={{
         
            height:"auto"
}}>
         
         <KTH />
         <Admission />
        


         </Grid>
        <Grid item xs={12} sm={12} lg={3} md={5}sx={{
  
      }}>
       <Blogs />
       <NationalInformation />
          </Grid>

    
        </Grid>



       </Box>
        </>
    )
}

export default DoctoralStudies;