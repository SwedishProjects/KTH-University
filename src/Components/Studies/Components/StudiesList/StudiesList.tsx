

import imagekth from '../../../../Assets/Images/About/bigOneSmall.jpg'

import * as React from 'react';
import Card from '@mui/material/Card';
import StudiesListChild from '../StudiesListChild/StudiesListChild';
import CardMedia from '@mui/material/CardMedia';

import {  Grid, CardActionArea, Container ,Box} from '@mui/material';






  const StudiesList =()=>{
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
          <StudiesListChild title={"Master’s studies"} text={"We offer 60 two-year master's degree programmes in English to students with a bachelor's degree or equivalent. "}
           StudiesLink={"Master's degree studies"} />

        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <StudiesListChild title={"Bachelor’s studies"} text={"We offer one three-year bachelor's degree programme in English within the subject Information and Communication Technology."}
           StudiesLink={"Bachelor's degree studies"} />
         
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <StudiesListChild title={"Exchange studies"} text={"We welcome students from around 200 exchange partner universities worldwide to study over 1,000 master's level courses in English."}
           StudiesLink={"Exchange studies"} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <StudiesListChild title={"Doctoral studies (PhD)"} text={"We offer four-year PhD degree positions to students with master's degrees or equivalent."}
         StudiesLink={"Doctoral studies (PhD)"} />
        <StudiesListChild title={"Massive open online courses (MOOCs)"} text={"We offer several online courses completely free of charge"}
         StudiesLink={"MOOCs"} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
        </>
    );
 } 

 export default StudiesList