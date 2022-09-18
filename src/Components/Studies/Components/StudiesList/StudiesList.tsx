




import StudiesListChild from '../StudiesListChild/StudiesListChild';


import {  Grid, Container ,Box} from '@mui/material';






  const StudiesList =()=>{
    return (
        <>
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
       <Grid item xs={12} sm={6} md={3} lg={3}>
          <StudiesListChild title={"Master’s studies"} text={"We offer 60 two-year master's degree programmes in English to students with a bachelor's degree or equivalent. "}
           StudiesLink={"Master's degree studies"} />

        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StudiesListChild title={"Bachelor’s studies"} text={"We offer one three-year bachelor's degree programme in English within the subject Information and Communication Technology."}
           StudiesLink={"Bachelor's degree studies"} />
         
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StudiesListChild title={"Exchange studies"} text={"We welcome students from around 200 exchange partner universities worldwide to study over 1,000 master's level courses in English."}
           StudiesLink={"Exchange studies"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
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