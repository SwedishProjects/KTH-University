
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
  <Box sx={{width:"100%",}}>
  <Box sx={{marginBottom: "20px",
    display: "block",width: "auto", 
    //  marginRight: "30px",
    // marginLeft: "-15px",
   }}>
   <Card sx={{     maxWidth: "100%",
    height: "auto",    marginBottom: "20px",
    display: "block", }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="271"
          // width="1228"
          image={images['About/About(1).jpg']}
          alt="green iguana"
          sx={{width:"100%",height:{xs:"auto",lg:"271px"}}}
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
     
        width:"100%",
        maxWidth: "100%",
      //  marginLeft:{xs:"-10px",sm:"-10px",lg:"-15px"},
      // //  marginRight:{xs:"40px",sm:"30px",lg:"0"},
      //   paddingRight:{xs:"0",sm:"0",lg:"0"},


        // padding: "15px"
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
         
     
          width:{xs:"100%",sm:"100%",lg:"1132px"},
        margin:"0 ",
        // marginRight: {xs:"-10px",sm:"30px",lg:"30px"},
        marginLeft: {xs:"-25px",sm:"-30px",lg:"-30px"},
        }}
      >
       <Box
      sx={{
        
  display: "flex",

flexWrap:{sm:"wrap"},
  flexDirection: {xs:"column",sm:"row",md:"row",lg:"row",},
  justifyContent: {xs:"center",sm:"center",md: "flex-start",lg: "flex-start",},
 
 
      }}
      >
       <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"About KTH"} links={AboutKTH} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"KTH Schools"} links={KTHSchools} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <LinkList title={"Cooperation"} links={Cooperation} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
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
