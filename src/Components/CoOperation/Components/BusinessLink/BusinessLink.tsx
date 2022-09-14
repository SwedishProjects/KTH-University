


import LinkList from '../../../LinkList/LinkList'


import {  Grid,  Container ,Box,Divider} from '@mui/material';



const  CollaborateKTH = [
  
  "Collaborate in research and innovation projects",
  "Competence centres",
  "Research infrastructures",
  "Collaboration projects",
];
const   CollaborateStudents = [

 
  "Develop your company with young talents",
  "Recruit international talents",
  "Advertise degree projects",
];
const   OurCollaborations = [
 
  "Strategic partnerships at KTH",
  "University Alliance Stockholm Trio",
 ];
 const     ContinuingEducation = [
 
  "Adjunct professor and affiliated faculty",
  "KTH Executive School",
 ];

 const    SupportKTH = [
  
  "Major gifts and extended support to KTH",
  "Become a mentor or guest lecturer",
 ];
 const     Contact = [
 
  "Contact us",
 ];





const BusinessLink = () => {
    
  
    return (
     <>
            <Divider sx={{    margin: "15px 0", paddingBottom:"6px",
              width:"100%", marginBottom:"30px",
             
            }} />
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
      <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Collaborate with KTH"} links={CollaborateKTH} />
        </Grid>
       <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Collaborate with students"} links={CollaborateStudents} />
          <LinkList title={"Our collaborations"} links={OurCollaborations} />
        </Grid>
       <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Continuing education"} links={ContinuingEducation} />
        </Grid>
       <Grid item xs={12} sm={6} md={6} lg={3}>
        <LinkList title={"Support KTH"} links={SupportKTH} />
        <LinkList title={"Contact"} links={Contact} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
     </>
      );
    };
    
    export default BusinessLink;