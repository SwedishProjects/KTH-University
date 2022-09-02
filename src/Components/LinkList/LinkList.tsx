import { Typography, Link, Grid ,Box} from "@mui/material";


interface LinkListProps {
  title: string;
  links: string[];
}
function LinkList({ title, links }: LinkListProps) {
  return (
   
      <Grid
      
      p="1rem"
      sx={{
        flexGrow: "1",
    maxWidth: "100%",
    display:"flex",
      justifyContent:"flex-start",
      alignItems:"flex-start",
  
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
      
       
       
      >
        {title}
      </Typography>
      {links.map((link, index) => (
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

export default LinkList;
