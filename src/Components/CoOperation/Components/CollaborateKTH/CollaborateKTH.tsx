
import {Typography , Link ,Box,Grid} from '@mui/material';
import {linkStyle} from '../../../../Styles/Blogs/index'
import {CollaborateBox,} from "../../../../Styles/CoOperation"


const CollaborateKTH = () => {

    return (
     <>
     <Typography component="h2" variant="h4" sx={{marginTop:"60px ",marginBottom:"20px",fontWeight:"600"}}>
     Collaborate with KTH
          </Typography>
          <Grid container spacing={2}>

          <Grid item xs={12} sm={6}  md={6}>
          <Box sx={CollaborateBox}>
          <Typography component="h2" variant="h5" sx={{marginBottom:"20px",fontWeight:"600"}}>
         KTH Degree Project Portal
          </Typography>
          <Typography variant="subtitle1" color="#000" component="div" sx={{marginBottom:"20px",}}>
          Brain power to your business, or a new approach to a problem?
           Via the KTH Degree Project Portal, you can easily reach our 
           students who can contribute new skills to your company.
            Post suggestions for degree projects as well as project placements, 
          internships or trainee places - free of charge.
          </Typography>

          <Link
          sx={linkStyle}
          href="#"
          underline="hover"
          mb={1.5}
          variant="subtitle1"
        >
          To the KTH Degree Project Portal
        </Link>
         </Box>
             </Grid>
          <Grid item xs={12} sm={6}  md={6}>
          <Box sx={CollaborateBox}>
         <Typography component="h2" variant="h5" sx={{marginBottom:"20px",fontWeight:"600"}}>
         Contact us
          </Typography>
          <Typography variant="subtitle1" color="#000" component="div" sx={{marginBottom:"20px"}}>
          Do you want to know more about how you can collaborate with KTH? 
          We offer support and guidance within strategic collaborations with KTH, 
          mediation of contacts with researchers and teachers, information on project 
          assignments, thesis projects and competence development.
          </Typography>

          <Link
          sx={linkStyle}
          href="#"
          underline="hover"
          mb={1.5}
          variant="subtitle1"
        >
       Contact us
        </Link>
         </Box>
             </Grid>

          </Grid>
        
     </>
      );
    };
    
    export default CollaborateKTH;