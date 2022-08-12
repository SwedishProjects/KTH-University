

import imagekth from '../../../../Assets/Images/About/bigOneSmall.jpg'

import * as React from 'react';
import Card from '@mui/material/Card';
import LinkList from '../../../LinkList/LinkList'
import CardMedia from '@mui/material/CardMedia';

import {  Grid, CardActionArea, Container ,Box} from '@mui/material';



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

 