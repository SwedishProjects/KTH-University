import FooterList from "./FooterList/FooterList";
import ContactList from "./ContactList/ContactList";
import { Grid, Typography, Box,Container } from "@mui/material";

const KTH = [
  "Study at KTH",
  "Research",
  "Cooperation",
  "About KTH",
  "Student at KTH",
  "Alumni",
  "KTH Intranet",
];
const Organisation = [
  "KTH Library",
  "KTH Schools",
  "Competence centres",
  "President",
  "University Administration",
];
const Services = [
  "Timetables",
  "Course and programme directory ",
  "Course, programme and group webs",
  "Learning management system (Canvas)",
  "Webmail",
];
const Contact = [
  "Contact KTH",
  "Work at KTH",
  "Press and media",
  "KTH on Facebook",
  "KTH on Twitter",
  "Contact web site administrators",
  "About KTH website",

];
const Info = [
  "SE-100 44 Stockholm",
  "Sweden",
  "+46 8 790 60 00",


];
function Footer() {
  return (
    <Container
      sx={{
        minHeight: "560px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#65656c",
        
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
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <FooterList title={"KTH"} links={KTH} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <FooterList title={"Organisation"} links={Organisation} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <FooterList title={"Services"} links={Services} />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
      


         
          <ContactList title={"Contact"} info={Info} links={Contact}  />

        </Grid>
      
      </Grid>
    
    </Container>
  );
}

export default Footer;
