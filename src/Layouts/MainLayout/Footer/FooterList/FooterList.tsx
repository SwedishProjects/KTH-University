import { Typography, Link, Grid ,Box} from "@mui/material";


interface FooterListProps {
  title: string;
  links: string[];
}
function FooterList({ title, links }: FooterListProps) {
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

export default FooterList;
