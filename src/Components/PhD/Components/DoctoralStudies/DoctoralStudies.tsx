
import { Grid, Box, Link , Typography } from '@mui/material';
import {HeadPhD,
    HeadPhDText,
} from "../../../../Styles/PhD" 
import KTH from '../KTH/KTH';
import Admission from '../Admission/Admission';
import Degrees from '../Degrees/Degrees';
import Options from '../Options/Options';
import Blogs from '../Blogs/Blogs';
function DoctoralStudies(){
    return(
        <>
       <Box
       sx={{backgroundColor:"#17a2b8" ,
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
        //  marginRight:"20px",
         backgroundColor:"#ffc107",
         width:"100%",
      boxSizing:"border-box",

      
      }}>
      <Grid item xs={12} sm={12} md={8.8} lg={8.8} sx={{
            backgroundColor:"#6610f2" ,
}}>
         
         <KTH />
         <Admission />
         <Degrees />
         <Options />


         </Grid>
        <Grid item xs={12} sm={12} lg={2.8} md={2.8}sx={{backgroundColor:"#528400",
    //   display:{xs:"none",sm:"none",md:"flex",lg:"flex"},
      }}>
       <Blogs />
          </Grid>

    
        </Grid>



       </Box>
        </>
    )
}

export default DoctoralStudies;