
import {
  Typography, Link, Box, CardMedia, CardContent,
 
} from "@mui/material";
import { ImageStyle, TitleStyle, TextStyle, linkStyle } from '../../../../Styles/Explore/index';



interface MoreNewsCardProps {


  title: string;
  image: string;
  Imagename: string;
  text: string;
  link: string;

}
function MoreNewsCard(props: MoreNewsCardProps) {
  return (


    <Box sx={{
      display: 'flex',
      flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", },
      backgroundColor: "#f6f6f6", marginTop: "30px",
      width: { sm: "100%", md: "100%", lg: "800px", }, marginLeft: "-22px",
    }}>

      <Box sx={{
        display: 'flex', flexDirection: 'column',
        width: { sm: "100%", md: "434px", lg: "434px", },
      }}>
        <CardContent sx={{
          flex: '1 0 auto',
          flexDirection: "column",
          justifyContent: "center",
          padding: "26px 32px"
        }}>
          <Typography component="h2" variant="h2" sx={TitleStyle}>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" sx={TextStyle}>
            {props.text}
          </Typography>
          <Link
            sx={linkStyle}

            href="#"

            underline="hover"
            mb={1.5}

            variant="subtitle1"
          >
            {props.link}
          </Link>
        </CardContent>

      </Box>
      <CardMedia
        sx={ImageStyle}
        component="img"

        image={props.image}
        alt={props.Imagename}
      />

    </Box>
  );
}

export default MoreNewsCard;
