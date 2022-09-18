import { Grid, Container, Box } from '@mui/material';
import LinkList from '../../../LinkList/LinkList'

const UsetheLibrary = [

  "Opening hours & contact",
  "Study at the library",
  "New student at the library",
  "How to borrow and request materials",
  "Navigate in the library",
  "Calendar",
  "About the library",
];
const SearchEvaluate = [

  "Search and evaluate information",
  "Databases and search tools",
  "Access to electronic material",
  "Patents – legal documents with technical content",
  "Book a teaching activity",
  "Literature search service",
  "Book a consultation",
];
const WriteCite = [

  "Academic writing and rhetoric",
  "Write references",
  "Reference management software",
  "Spelling and grammar",
  "Book a consultation",
];
const PublishAnalyse = [

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
              <LinkList title={"Use the library"} links={UsetheLibrary} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <LinkList title={"Search & evaluate"} links={SearchEvaluate} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <LinkList title={" Write & cite"} links={WriteCite} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <LinkList title={"Publish & analyse"} links={PublishAnalyse} />

            </Grid>
          </Box>

        </Grid>

      </Container>


    </>
  );
};

export default LibraryLink;