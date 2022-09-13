
import CardMedia from '@mui/material/CardMedia';

import {ArticleImageStyle} from "../../../../Styles/ReadArticle"
type props = {
    title: string;
    image: string;
  };
  
function  ArticleImage ({ image, title }: props){
    return (
        <>
        <CardMedia component='img' image={`${image}`} alt={`${title}`} 
         sx={ArticleImageStyle}/>
        </>
    )
}


export default ArticleImage;