import ArticleText from '../ArticleText/ArticleText';
import ArticleLink from '../ArticleLink/ArticleLink';
import ArticleImage from '../ArticleImage/ArticleImage';

import {ArticleCartStyle} from "../../../../Styles/ReadArticle"



import { Box} from '@mui/material';
interface info {
  title: string;
  image: string;
  Imagename: string;
  text : string;
  ReadLink: string;
  
}

function ReadArticleCard(props: info) {
  return (
    <Box sx={ArticleCartStyle}>
    <Box
    sx={{
      
display: "flex",


flexDirection: "column",
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"250px",lg:"250px",},

    }}
    >
      
   
   
     <Box>
        <ArticleImage title={props.Imagename} image={props.image}></ArticleImage>
       
        <ArticleText title={props.title}   text={props.text}></ArticleText>
      
        <ArticleLink ReadLink={props.ReadLink}></ArticleLink>
        
      </Box>
   
     </Box>
   
     </Box>
  );
}

export default ReadArticleCard;
