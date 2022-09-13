

import {  Grid, Container ,Box} from '@mui/material';
import LinkList from '../../../LinkList/LinkList'

const  UsetheLibrary = [
   
    "Opening hours & contact",
    "Study at the library",
    "New student at the library",
    "How to borrow and request materials",
    "Navigate in the library",
    "Calendar",
    "About the library",
  ];
  const   SearchEvaluate = [
    
    "Search and evaluate information",
    "Databases and search tools",
    "Access to electronic material",
    "Patents – legal documents with technical content",
    "Book a teaching activity",
    "Literature search service",
    "Book a consultation",
];
const  WriteCite = [
    
    "Academic writing and rhetoric",
    "Write references",
    "Reference management software",
    "Spelling and grammar",
    "Book a consultation",
];
const  PublishAnalyse = [
    
    "Support for doctoral students and researchers",
    "Guidance for publishing",
    "Publish open access",
    "Find journals with open access publishing",
    "Manage publications",
    "Manage research data",
    "Bibliometrics",
    "Book a consultation",
];






const LibraryLink = () => {
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
          <LinkList title={"Use the library"} links={UsetheLibrary} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={"Search & evaluate"} links={SearchEvaluate} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <LinkList title={" Write & cite"} links={WriteCite} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
        <LinkList title={"Publish & analyse"} links={PublishAnalyse} />

        </Grid>
       </Box>
      
      </Grid>
    
    </Container>
 
    
    </>
    );
  };
  
  export default LibraryLink;