


import images from "../../../../Importer/Importer"
import { Box,CardMedia, } from "@mui/material";
import TeaserBox from "../TeaserBox/TeaserBox";
function CoOperationTeaser (){
    return (
        <>
          <Box sx={{     maxWidth: "100%",
    height: "auto",    marginBottom: "20px",
    display: "block",width: "auto", }}>
      
        <CardMedia
          component="img"
          height="376"
          width="1228"
          image={images['CoOperation/samverkan-top-teaser.jpg']}
          alt="green iguana"
        />
        <TeaserBox />
      
      
    </Box>
  
        </>
    )
}

export default CoOperationTeaser ;