import CardDescription from './CardDescription/CardDescription';
import CardLink from './CardLink/CardLink';
import CardImage from './CardImage/CardImage';
import CardTitle from './CardTitle/CardTitle';





import {  Grid, Divider, Container ,Box} from '@mui/material';
interface info {
  title: string;
  image: string;
  Imagename: string;
  text : string;
  links: string[];
  
}

function ArticleCard(props: info) {
  return (
    <Box
    sx={{
      
display: "flex",
// height:"400px",
border:"2px solid #000",
flexDirection: "column",
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"200px",lg:"196px",},


    }}>
      
   
   
     <Box>
        <CardImage title={props.Imagename} image={props.image}></CardImage>
        <Box sx={{
          padding: "20px 0",
        
          // paddingRight:"10px",
        }}>
        <CardTitle title={props.title}></CardTitle>
        <CardDescription
          text={props.text}
        
        ></CardDescription>
        <CardLink links={props.links}></CardLink>


        </Box>
      </Box>
       <Divider orientation="vertical" sx={{    margin: "15px 0",
               paddingBottom:"6px",
              width:{xs:"100%",sm:"100%",md:"100%",lg:"100%",},
               marginBottom:"25px",
               color:"#d4351c",
            

            }} />
        
     
     </Box>
   
   
  );
}

export default ArticleCard;
