
// import imagekth from '../../../../Assets/Images/About/About(1).jpg'
import images from "../../../../Importer/Importer"
 import * as React from 'react';
import Card from '@mui/material/Card';
import LinkList from '../../../LinkList/LinkList'
import CardMedia from '@mui/material/CardMedia';

import {  Grid, CardActionArea, Container ,Box} from '@mui/material';



const  AboutKTH = [
  "Facts about KTH",
  "KTH's organisation",
  "President",
  "Competence centres",
  "Environment and sustainable development",
  "Gender Equality, Diversity and Equal Conditions",
  "News from KTH",
];
const  KTHSchools = [

 "Architecture and the Built Environment",
  "Electrical Engineering and Computer Science",
  "Engineering Sciences",
  "Engineering Sciences in Chemistry, Biotechnology and Health",
  "Industrial Engineering and Management",
];
const  Cooperation = [
  "Support KTH",
  "Internationalisation",
  "Business Liaison",
  "KTH Innovation",
 ];
 const    Contact = [
"Contact KTH",
"Meet KTH",
"Work at KTH",
"Press contacts",
"Our campuses",
"The President’s thoughts",
"Procurements",
 ];
function AboutLinks() {
  return (
    <>
  <Box sx={{padding:"0 15px" ,margin:"0 auto"}}>
  <Box sx={{marginBottom: "20px",
    display: "block",width: "auto",  marginRight: "-15px",
    marginLeft: "-15px",
    margin: "0 0 1rem",}}>
   <Card sx={{     maxWidth: "100%",
    height: "auto",    marginBottom: "20px",
    display: "block",width: "auto", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="271"
          width="1228"
          image={images['About/About(1).jpg']}
          alt="green iguana"
        />
      
      </CardActionArea>
      
    </Card>
    </Box>
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
          <LinkList title={"About KTH"} links={AboutKTH} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"KTH Schools"} links={KTHSchools} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Cooperation"} links={Cooperation} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <LinkList title={"Contact"} links={Contact} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
  </Box>
    
     
   
    </>
  );
}

export default AboutLinks;
