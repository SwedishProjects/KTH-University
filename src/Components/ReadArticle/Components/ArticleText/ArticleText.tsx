import { Typography, Link, Grid ,Box} from "@mui/material";
import { ArticleTitleStyle ,ArticleTextStyle} from "../../../../Styles/ReadArticle"

interface ArticleTextProps {
  title: string;
  text: string;
}
function ArticleText({ title, text }: ArticleTextProps) {
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
      sx={ ArticleTitleStyle}
        variant="h2"
        mb={2.5}
       
       
      >
        {title}
      </Typography>
      <Typography
      sx={ArticleTextStyle}
        variant="h2"
        mb={2.5}
       
       
      >
        {text}
      </Typography>
      
      </Box>
    </Grid>
   
  );
}

export default ArticleText;
