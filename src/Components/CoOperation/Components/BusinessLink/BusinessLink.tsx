


import * as React from 'react';
import Card from '@mui/material/Card';
import LinkList from '../../../LinkList/LinkList'
import CardMedia from '@mui/material/CardMedia';

import {  Grid, CardActionArea, Container ,Box} from '@mui/material';



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
          <LinkList title={"Collaborate with KTH"} links={CollaborateKTH} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Collaborate with students"} links={CollaborateStudents} />
          <LinkList title={"Our collaborations"} links={OurCollaborations} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Continuing education"} links={ContinuingEducation} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
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