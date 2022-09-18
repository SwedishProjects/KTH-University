


import images from "../../../../Importer/Importer"
import { Box,CardMedia, } from "@mui/material";
import LibrarySearch from "../LibrarySearch/LibrarySearch";
function LibraryTeaser (){
    return (
        <>
          <Box sx={{     maxWidth: "100%",
    height: "auto",    marginBottom: "20px",
    display: "block",width: "auto", }}>
      
        <CardMedia
          component="img"
          height="376"
          width="1228"
          image={images['Library/Library(5).jpg']}
          alt="Search in Primo for books & articles"
        />
        <LibrarySearch />
      
      
    </Box>
  
        </>
    )
}

export default LibraryTeaser ;