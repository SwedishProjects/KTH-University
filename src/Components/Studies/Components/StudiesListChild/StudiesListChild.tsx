import { Typography, Link, Grid ,Box} from "@mui/material";


interface StudiesListChildProps {
  title: string;
  text:string;
  StudiesLink: string;
}
function StudiesListChild({ title,text, StudiesLink }: StudiesListChildProps) {
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
      <Box >
      <Typography
      sx={{
       
        fontSize: "1.25rem",
    fontWeight: "600",
    color: "#000",
    lineHeight: "1.375",
    marginTop: "0",
    marginBottom: "14px",
    display: "block",
      }}
        variant="h2"
        mb={2.5}
       
       
      >
        {title}
      </Typography>
      <Typography
      sx={{
       
        
        fontSize: "1rem",
        fontWeight: "400",
        color: "#000",
        lineHeight: "1.5",
      }}
        variant="body2"
        mb={2.5}
       
       
      >
        {text}
      </Typography>
     
        <Link
          sx={{
            fontSize: "1rem",
            fontHeight: "400",
            color: "#006cb7",
            textDecoration: "none",
            backgroundColor: "transparent",
            marginBottom: "14px",
            lineHeight: "1.5",
            display:"block",
          }}
       
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {StudiesLink}
        </Link>
      
      </Box>
    </Grid>
   
  );
}

export default StudiesListChild;
