import {  Grid, CardActionArea, Container ,Box} from '@mui/material';
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
        minHeight: "560px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#ffffff",
        
        maxWidth: "100%",
       
        padding: "15px"
      }}
    >
      <Grid
        container
        height="100%"
        display="flex"
        justifyContent="space-around"
        alignItems="flex-start"
         sx={{
          flexWrap: "wrap",
          flexGrow: "1",
          marginRight: "-15px",
          marginLeft: "-15px",
        }}
      >
       <Box
      sx={{
        
  display: "flex",


  flexDirection: {xs:"column",sm:"row",md:"row",lg:"row",},
  justifyContent: {xs:"center",sm:"center",md: "flex-start",lg: "flex-start",},
 
 
      }}
      >
       <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Research platforms"} links={ResearchPlatforms} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Research at KTH's schools"} links={ResearchSchools} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Strategic efforts and competence centres"} links={StrategicEfforts} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
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