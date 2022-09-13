



import LinkList from '../../../LinkList/LinkList'


import {  Grid,  Container ,Box} from '@mui/material';



const   GetInvolved = [
   
    "Volunteering at KTH",
    "Join the mentor program",
    "Organise a reunion",
    "Advertise/Find a degree project",
];
const  KTHOpportunitiesFund = [
    "KTH Opportunities Fund",
    "Meet our scholarship holders",
    "Apply for a grant",
];
const  Network = [
    
    "International alumni groups",
 ];
 const    OurAlumni = [
    
    "Alum of the Year",
    "KTH Alumni Advisory Board",
 ];
 const    Calendar = [
    
    "Meet KTH",
    "Upcoming events",
 ];
 const    Contact = [
    "Contact",
    "Stay in touch with KTH",
    "Join KTH Alumni on LinkedIn",
    "Contact us",
 ];

 const      SupportKTH = [
  
    "Major gifts and extended support to KTH",
 ];


 export const AlumniList =()=>{
    return (
        <>
        
        <Container
      sx={{
        overflowX:"hidden",
        marginBottom: "20px",
       
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",

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
       
        marginLeft: {xs:"0",sm:"-22px",md:"-25px",lg:"-25px"},
        width:{xs:"100%",sm:"100%",lg:"1228px",md:"100%"},
      margin:"0 ",
   

        }}
      >
       <Box
      sx={{
        
      
        marginLeft: {xs:"0",sm:"0",md:"0",lg:"0"},
       
        width:{xs:"100%",sm:"100%",md:"1200px",lg:"1141px"},
       
       
        
        display: "flex",

        flexWrap:{sm:"wrap"},
          flexDirection: {xs:"column",sm:"row",md:"row",lg:"row",},
          justifyContent: {xs:"center",sm:"center",md: "flex-start",lg: "flex-start",},
      }}
      >
       <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Get involved"} links={GetInvolved} />
          <LinkList title={"KTH Opportunities Fund"} links={KTHOpportunitiesFund} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Network"} links={Network} />
          <LinkList title={"Our alumni"} links={OurAlumni} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Calendar"} links={Calendar} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <LinkList title={"Contact"} links={Contact} />
        <LinkList title={"Support KTH"} links={SupportKTH} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
     
        </>
    );
 } 

 