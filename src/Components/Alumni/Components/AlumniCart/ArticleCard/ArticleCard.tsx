import CardDescription from '../CardDescription/CardDescription';
import CardLink from '../CardLink/CardLink';
import CardImage from '../CardImage/CardImage';
import CardTitle from '../CardTitle/CardTitle';

import AlumniMentor from '../AlumniMentor/AlumniMentor';




import {  Link, Typography, Container ,Box} from '@mui/material';
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
flexDirection: {xs:"column",sm:"",lg:"row",md:"row"},
justifyContent: "flex-start",
width:{xs:"100%",sm:"100%",md:"100%",lg:"100%",},

    }}>
      
   
   
     <Box    sx={{
      
      display: "flex",
      marginTop:"30px",
      width:"100%",

flexDirection: {xs:"column",sm:"row",lg:"row",md:"row"},
      justifyContent:  {xs:"space-between",sm:"",lg:"space-between",md:"space-between",},
    
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
     <Box sx={{
       display:props.title==="KTH Alumni Mentor Programme" ? "block":"none",
     }}>
     <AlumniMentor />
     </Box>
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
        <Box sx={{
       display:props.title==="KTH Alumni Mentor Programme" ? "block":"none",
     }}>
     <AlumniMentor />
     </Box>
        </Box>
      
      </Box>
   
     </Box>
   
   
  );
}

export default ArticleCard;
