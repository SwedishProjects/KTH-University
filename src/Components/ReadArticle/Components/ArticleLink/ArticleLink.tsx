import {  Link,Box} from "@mui/material";
import {ArticleLinkStyle} from "../../../../Styles/ReadArticle"

interface ArticleLinkProps {
 
  ReadLink: string;
}
function ArticleLink({  ReadLink }: ArticleLinkProps) {
  return (
   
     
      <Box >
      
      
        <Link
          sx={ArticleLinkStyle}
          
          href="#"
         
          underline="hover"
          mb={1.5}
         
          variant="subtitle1"
        >
           {ReadLink}
        </Link>
     
      </Box>
 
   
  );
}

export default ArticleLink;
