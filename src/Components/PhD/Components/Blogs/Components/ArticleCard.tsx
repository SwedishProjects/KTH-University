import CardDescription from './CardDescription/CardDescription';
import CardLink from './CardLink/CardLink';
import CardImage from './CardImage/CardImage';
import CardTitle from './CardTitle/CardTitle';





import {   Divider,Box} from '@mui/material';
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
   >
      
      <Divider orientation="vertical" sx={{    
              
            //  color:"#d4351c",
            color:"#000"
          
          }} />
   
     <Box  sx={{
      
      display: "flex",
      height:{xs:"auto",sm:"auto",md:"370px",lg:"365px"},
      
      flexDirection: "column",
      justifyContent: "flex-start",
      width:{xs:"100%",sm:"100%",md:"200px",lg:"199px",},
      
      
          }}>
  
        <CardImage title={props.Imagename} image={props.image}></CardImage>
        <Box sx={{
          padding: "20px 0",
        
        
        }}>
        <CardTitle title={props.title}></CardTitle>
        <CardDescription
          text={props.text}
        
        ></CardDescription>
        <CardLink links={props.links}></CardLink>


        </Box>
      </Box>
    
        
     
     </Box>
   
   
  );
}

export default ArticleCard;
