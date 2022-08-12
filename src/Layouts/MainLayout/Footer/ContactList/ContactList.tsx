import { Typography, Link, Grid ,Box} from "@mui/material";


interface ContactListProps {
  title: string;
  info: string[];
  links: string[];
}
function ContactList({ title,info ,links }: ContactListProps) {
  return (
   
      <Grid
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      p="1rem"
      sx={{
        flexGrow: "1",
    maxWidth: "100%",
      }}
    >
      <Box sx={{    margin: "0 0 30px",}}>
      <Typography
      sx={{
       
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontSize: "1.25rem",
        marginTop: "0",
      }}
        variant="h2"
        mb={2.5}
        color="white"
       
      >
        {title}
      </Typography>
      <Typography variant="body2" component="strong" color="white" sx={{marginTop:"0",    fontWeight: "bolder",}}>
        KTH Royal Institute of Technology
</Typography>
      {info.map((information, index) => (
        <Typography variant="body2" component="p" color="white"
          sx={{
            display: "flex",
            alignItems: "center",
           fontFamily: "Open Sans",
    color: "#fff",
    lineHeight: "1.4375",
    fontWeight: "400",
    fontSize: "1rem",
    marginBottom: "14px",
          }}
          key={index}
       
          mb={1.5}
         
         
        >
          
           <em> {information}</em>
           </Typography>
       
       ))}
      

      {links.map((link, index) => (
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
           fontFamily: "Open Sans",
    color: "#fff",
    lineHeight: "1.4375",
    fontWeight: "400",
    fontSize: "1rem",
    marginBottom: "14px",
          }}
          key={index}
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {link}
        </Link>
      ))}
      </Box>
    </Grid>
   
  );
}

export default ContactList;
