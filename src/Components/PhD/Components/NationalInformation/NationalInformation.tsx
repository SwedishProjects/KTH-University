import { Box} from '@mui/material';

import CardTitle from "../Blogs/Components/CardTitle/CardTitle";
import CardLink from "../Blogs/Components/CardLink/CardLink";

function NationalInformation(){
    return (
        <>

<Box
    sx={{
      
display: "flex",

flexDirection: "column",
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"200px",lg:"196px",},
marginLeft:{lg:"-16px",xs:"15px",sm:"20px",md:"40px"},

    }}>
      
   
   
     <Box>
     
        <Box sx={{
          padding: "20px 0",
        }}>
        <CardTitle title={"National information"}></CardTitle>
       
        <CardLink links={["www.studyinsweden.se"]}></CardLink>
        <CardLink links={["Doctoral studies in Sweden"]}></CardLink>



        </Box>
      </Box>
      
     
     </Box>
        </>
    )
}


export default NationalInformation;