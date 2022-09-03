import CardDescription from '../CardDescription/CardDescription';
import CardLink from '../CardLink/CardLink';
import CardImage from '../CardImage/CardImage';
import CardTitle from '../CardTitle/CardTitle';





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
paddingRight:"0",
// backgroundColor:"#17a2b8",
flexDirection: {xs:"column",sm:"",lg:"row",md:"row"},
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"100%",lg:"100%",},

    }}>
      
   
   
     <Box    sx={{
      
      display: "flex",
      marginTop:"30px",
      width:"100%",
// backgroundColor:"#d4351c",
flexDirection: {xs:"column",sm:"row",lg:"row",md:"row"},
      justifyContent:  {xs:"space-between",sm:"",lg:"space-between",md:"space-between",},
      // alignItems:"flex-end"
      border:" 1px solid #d4d4d4!important",
      }}>


     <Box sx={{
          padding: "20px ",
          display:{xs:"none",sm:"block",md:"block",lg:"block"},
        }}>
        <CardTitle title={props.title}></CardTitle>
        <CardDescription
          text={props.text}
        
        ></CardDescription>
        <CardLink links={props.links}></CardLink>
        </Box>
        <CardImage title={props.Imagename} image={props.image}></CardImage>

        {/* //////// */} 
         <Box sx={{
          padding: "20px ",
          display:{xs:"block",sm:"none",md:"none",lg:"none"},
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
