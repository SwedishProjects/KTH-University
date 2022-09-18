
import CardMedia from '@mui/material/CardMedia';


type props = {
    title: string;
    image: string;
    use:string;
  };
  
function  ArticleImage ( props){
    return (
        <>
        <CardMedia component='img' image={`${props.image}`} alt={`${props.title}`} 
         sx={{
            maxWidth: "100%",
    //    width:props.use==="LibraryCart" ? {xs:"100%",sm:"240px",md:"400px",lg:"400px",}: "100%",
        lineHeight: "1",
            // width:{xs:"auto",sm:"250px"},
            overflow:"hidden",
           
            height:{xs:"auto",sm:"150px"},
        marginBottom:" 0",
         }}/>
        </>
    )
}


export default ArticleImage;