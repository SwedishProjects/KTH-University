



import * as React from 'react';

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
        marginBottom: "20px",
        minHeight: "560px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#000",
        width:"100%",
        maxWidth: "100%",
        paddingLeft:"0",
        paddingRight:"0"
    
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
         
     
          width:{xs:"100%",sm:"100%",md:"100%",lg:"1228px"},
        margin:"0 ",
       
        marginLeft: {xs:"0",sm:"0",md:"0",lg:"-25px"},

        }}
      >
       <Box
      sx={{
        
        display: "flex",

        bgcolor: "#ffc107",
        width:{xs:"100%",sm:"100%",md:"100%",lg:"1141px"},
        
        flexDirection: {xs:"column",sm:"row",md:"row",lg:"row",},
        justifyContent: {xs:"center",sm:"center",md: "space-between",lg: "space-between",},
      //  alignItems:{xs:"center",sm:"center",md: "space-between",lg: "space-between",},
      }}
      >
       <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Get involved"} links={GetInvolved} />
          <LinkList title={"KTH Opportunities Fund"} links={KTHOpportunitiesFund} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Network"} links={Network} />
          <LinkList title={"Our alumni"} links={OurAlumni} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Calendar"} links={Calendar} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <LinkList title={"Contact"} links={Contact} />
        <LinkList title={"Support KTH"} links={SupportKTH} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
     
        </>
    );
 } 

 