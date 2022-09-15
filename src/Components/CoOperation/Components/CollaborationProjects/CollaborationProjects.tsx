import {Typography , Link , CardContent ,Box,CardMedia,Grid} from '@mui/material';
import {linkStyle} from '../../../../Styles/Blogs/index'
import {projectsCardBox,EventsCardContentBox,projectsImage} from "../../../../Styles/CoOperation"
import images from "../../../../Importer/Importer"




const CollaborationProjects = () => {
    return (
     <>
      <Typography component="h2" variant="h4" sx={{marginTop:"60px ",marginBottom:"20px",fontWeight:"600"}}>
      Collaboration projects within our strategic partnerships
          </Typography>
          <Grid container spacing={2}>

          <Grid item xs={12} sm={6}  md={6}>
          <Box sx={projectsCardBox}>
      <Box sx={EventsCardContentBox}>
        <CardContent sx={{ flex: '1 0 auto' ,padding:"30px"}}>
          <Typography component="h2" variant="h4" sx={{marginBottom:"20px"}}>
          - Openness gives better products
          </Typography>
          <Typography variant="subtitle1" color="#000" component="div" sx={{marginBottom:"20px"
          ,fontSize: "1rem"}}>
          KTH and Saab have a mutual interest – to develop 
          the software of the future. This is the purpose of the cooperation project CASTOR,
           a software technology research centre at KTH.
          </Typography>
          <Link
          sx={linkStyle}
         
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
          KTH and Saab in collaboration
        </Link>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        sx={projectsImage}
        image={images['CoOperation/Castor_150 dpi_bildspel2.jpg']}
        alt="   KTH and Saab in collaboration"
      />
    </Box>
             </Grid>
          <Grid item xs={12} sm={6}  md={6}>
          <Box sx={projectsCardBox}>
      <Box sx={EventsCardContentBox}>
        <CardContent sx={{ flex: '1 0 auto' ,padding:"30px",}}>
          <Typography component="h2" variant="h4" sx={{marginBottom:"20px"}}>
          Lifelong learning pilot for Scania employees
          </Typography>
          <Typography variant="subtitle1" color="#000" component="div" sx={{marginBottom:"20px"
                ,fontSize: "1rem"
        }}>
          New technologies demand new kinds of competence.
           “Scania and KTH want new ways of working together, 
           so this was initiated by both parties,” says Johanna Strömgren, 
           responsible for Lifelong 
          Learning at School of Industrial Engineering and Management 
          (ITM) at KTH about the pilot.
          </Typography>
          <Link
          sx={linkStyle}
         
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
        Lifelong learning pilot for Scania employees
        </Link>
        </CardContent>
      
      </Box>
      <CardMedia
        component="img"
        sx={projectsImage}
        image={images['CoOperation/Johanna_2019.jpg']}
        alt=" Lifelong learning pilot for Scania employees"
      />
    </Box>
             </Grid>

          </Grid>
     </>
      );
    };
    
    export default CollaborationProjects;