
import { Typography, Link, Grid ,Box ,Container ,Divider} from "@mui/material";
import {NameStyle , linkStyle,} from '../../Styles/ArticleFooter/index'
import {ContainerStyle } from '../../Styles/Container/Container'
interface CustomBreadcrumbsProps {
  
   links : string[];
   text: string;
  }

  function CustomBreadcrumbs ({ links , text}: CustomBreadcrumbsProps){
    return(
        <>
      <Container sx={ContainerStyle} >
         
   <Box>
   <Box sx={{display:{xs:"block",sm:"block",md:"inline-block",lg:"inline-block"},color: "#006cb7",}}>
    <Link
          sx={linkStyle}
        
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {"KTH"}
        </Link>
       
        {links.map((link, index) => (
        <Link
          sx={{
            linkStyle
          }}
          key={index}
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           <span className="linkColor">{" / " + link}</span>
        </Link>
      ))}
    </Box>

    
    <Box sx={{float:{xs:"none",sm:"none",md:"right",lg:"right",},
    display:{xs:"block",sm:"block",md:"inline-block",lg:"inline-block"}}}>
    <Link
          sx={linkStyle}
        
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {text}
        </Link>
      
    </Box>
   </Box>
         </Container>
        </>
    );
 

}
export default CustomBreadcrumbs