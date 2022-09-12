import {  Grid, Container ,Box} from '@mui/material';
import LinkList from '../../../LinkList/LinkList'

const   ResearchPlatforms = [
   
    "KTH's research platforms",
    "Digitalisation",
    "Energy",
    "Industrial Transformation",
    "Life Science",
    "Materials",
    "Transport",
  ];
  const  ResearchSchools = [
    
    "About the schools",
    "Architecture and the Built Environment",
    "Industrial Engineering and Management",
    "Electrical Engineering and Computer Science",
    "Engineering Science",
    "Engineering Sciences in Chemistry, Biotechnology and Health",
    "All departments",
];
const  StrategicEfforts = [
    
    "Assessment of KTH's research",
    "Competence centres",
    "Environment and sustainable development",
    "European Institute of Innovation and Technology, EIT",
    "Research platforms",
    "KTH's strategic research areas (SFO)",
];
const  InfrastructuresResources = [
    
    "Co-operation",
    "Doctoral studies",
    "Funding support (Research office)",
    "Innovation and commercialisation",
    "Ranking",
    "Research infrastructures",
    "Research publications",
];
const  FindResearchers = [
    
    "Staff directory",
    "Meet KTH's professors",
    "Press contacts",
];
const ResearchLink = () => {
    return (
    <>
    <Container
      sx={{
        overflowX:"hidden",
        marginBottom: "20px",
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        // bgcolor: "#000",
        width:"100%",
        maxWidth: "100%",
        paddingLeft:"0",
        paddingRight:"0",
        padding:"0",
      }}
    >
      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
             sx={{
          
    
    
            flexWrap: "wrap",
            flexGrow: "1",
           
            marginLeft: {xs:"-10px",sm:"-32px",md:"-35px",lg:"-35px"},
            width:{xs:"100%",sm:"100%",lg:"1228px",md:"100%"},
          margin:"0 ",
        }}
      >
       <Box
      sx={{
   
        marginLeft: {xs:"0",sm:"0",md:"0",lg:"0"},
        // bgcolor: "#ffc107",
        width:{xs:"100%",sm:"100%",md:"1200px",lg:"1141px"},
       
       
        
        display: "flex",

        flexWrap:{sm:"wrap"},
          flexDirection: {xs:"column",sm:"row",md:"row",lg:"row",},
          justifyContent: {xs:"center",sm:"center",md: "flex-start",lg: "flex-start",},
 
      }}
      >
         <Grid item xs={12} sm={6} md={3} lg={3}>
          <LinkList title={"Research platforms"} links={ResearchPlatforms} />
        </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
          <LinkList title={"Research at KTH's schools"} links={ResearchSchools} />
        </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
          <LinkList title={"Strategic efforts and competence centres"} links={StrategicEfforts} />
        </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
        <LinkList title={"Infrastructures and resources"} links={InfrastructuresResources} />
        <LinkList title={"Find researchers"} links={FindResearchers} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
    </>
    );
  };
  
  export default ResearchLink;