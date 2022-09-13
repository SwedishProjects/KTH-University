import CardDescription from './CardDescription/CardDescription';
import CardLink from './CardLink/CardLink';
import CardImage from './CardImage/CardImage';
import CardTitle from './CardTitle/CardTitle';





import { Box} from '@mui/material';
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

marginLeft: {xs:"0",md:"0",lg:"-25px"},

flexDirection: "column",
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"100%",lg:"280px",},

    }}>
      
   
   
     <Box>
        <CardImage title={props.Imagename} image={props.image}></CardImage>
        <Box sx={{
          padding: "20px 0",
          paddingRight:"10px"
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
