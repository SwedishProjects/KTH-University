


import images from "../../../../Importer/Importer"
import { Box, Container,CardMedia,Card,CardActionArea } from "@mui/material";
import TeaserBox from "../TeaserBox/TeaserBox";
function StudyTeaser (){
    return (
        <>
          <Box sx={{     maxWidth: "100%",
    height: "auto",    marginBottom: "20px",
    display: "block",width: "auto", }}>
      
        <CardMedia
          component="img"
          height="376"
          width="1228"
          image={images['Study/bloggers.jpg']}
          alt="green iguana"
        />
        <TeaserBox />
      
      
    </Box>
  
        </>
    )
}

export default StudyTeaser ;