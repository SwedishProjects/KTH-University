import CardDescription from './CardDescription/CardDescription';
import CardLink from './CardLink/CardLink';
import CardImage from './CardImage/CardImage';
import CardTitle from './CardTitle/CardTitle';
import Card from '@mui/material/Card';




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


flexDirection: "column",
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"280px",lg:"280px",},

    }}>
      
   
   
     <Card>
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
      </Card>
   
     </Box>
   
   
  );
}

export default ArticleCard;
