import {  Grid, Divider, Container ,Box} from '@mui/material';

import CardTitle from "../Blogs/Components/CardTitle/CardTitle";
import CardLink from "../Blogs/Components/CardLink/CardLink";

function NationalInformation(){
    return (
        <>

<Box
    sx={{
      
display: "flex",
height:"400px",
// border:"2px solid #000",
flexDirection: "column",
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"200px",lg:"196px",},
marginLeft:{lg:"-16px"},

    }}>
      
   
   
     <Box>
     
        <Box sx={{
          padding: "20px 0",
        
          // paddingRight:"10px",
        }}>
        <CardTitle title={"National information"}></CardTitle>
       
        <CardLink links={["www.studyinsweden.se"]}></CardLink>
        <CardLink links={["Doctoral studies in Sweden"]}></CardLink>



        </Box>
      </Box>
       {/* <Divider sx={{    margin: "15px 0",
               paddingBottom:"6px",
              width:{xs:"100%",sm:"100%",md:"270px",lg:"270px",},
               marginBottom:"25px"
            }} />
         */}
     
     </Box>
        </>
    )
}


export default NationalInformation;