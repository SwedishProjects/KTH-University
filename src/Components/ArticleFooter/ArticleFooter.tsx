
import { Typography, Link, Grid ,Box ,Container ,Divider} from "@mui/material";
import {NameStyle , linkStyle,TextStyle} from '../../Styles/ArticleFooter/index'
import {ContainerStyle } from '../../Styles/Container/Container'

import CreateIcon from '@mui/icons-material/Create';
interface ArticleFooterProps {
    title: string;
   pageName :string;
   time : string;
  }

  function ArticleFooter ({ title, pageName , time}: ArticleFooterProps){
    return(
        <>
            <Box sx={{marginLeft:"-27px"}}>
            <Container sx={ContainerStyle} >
         <Box sx={{flex: "0 0 100%" , maxWidth: "100%",}}>
         <Divider sx={{    margin: "15px 10px", paddingBottom:"10px",width:"100%",}} />
<Box sx={{
        flexBasis: "0",
        flexGrow: "1",
        maxWidth: "100%",
        width: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
}}>
      
<Box>
<Typography
      sx={{
       
        fontSize: "1rem",
    fontWeight: "600",
    color: "#000",
    lineHeight: "1.5",
    marginTop: "0",
    marginBottom: "14px",
    marginRight: "4px",
    display:  {xs:"block",sm:"block",md:"inline-block",lg:"inline-block"},
      }}
        variant="body1"
        mb={2.5}
       
       
      >
       Page responsible:
      </Typography>
      <Link
          sx={linkStyle}
        
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {title}
        </Link>
</Box>
<Box sx={{float:"right",marginTop:{xs:"-80px",lg:"-40px",md:"-40px"}}}>
         <CreateIcon sx={{fontSize:"20px"}} />
         </Box>
<Box>
<Typography
      sx={NameStyle}
        variant="body1"
        mb={2.5}
       
       
      >
       Belongs to:
      </Typography>
      <Typography
      sx={TextStyle}
        variant="body1"
        mb={2.5}
       
       
      >
       {pageName }
      </Typography>
    </Box>
    <Box>
<Typography
      sx={NameStyle}
        variant="body1"
        mb={2.5}
       
       
      >
      Last changed:
      </Typography>
      <Typography
      sx={TextStyle}
        variant="body1"
        mb={2.5}
       
       
      >
       {time }
      </Typography>
     
    </Box>
    </Box>
     
  
      </Box>
       
         </Container>
            </Box>
        </>
    );
 

}
export default ArticleFooter