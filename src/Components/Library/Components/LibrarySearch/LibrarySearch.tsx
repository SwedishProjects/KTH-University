

import images from "../../../../Importer/Importer";
import { ContainerStyle } from '../../../../Styles/Container/Container'

import SearchIcon from '@mui/icons-material/Search';
import { Typography ,Box,
  Link} from '@mui/material';
import { Container } from '@mui/system';




const LibrarySearch = () => {
 
  return (
    <Box sx={{ margin: { xs: "0 -20px", lg: "0 -10px" } }}>
      <Container sx={ContainerStyle} >
        <Box component={"div"} sx={{ position: "relative", backgroundColor: "white" }}>
          <Box style={{}}>
            <img
              style={{ position: "relative", inset: 0 }}
              height="auto"
              width="100%"
              src={images['Library/Library(5).jpg']}
              alt="green iguana"
            />
            <Box sx={{ width: "55%", position: "absolute", bottom: 50, left: "0", backgroundColor: "white", padding: "20px 25px 25px 35px", display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontSize: "xx-large", fontWeight: "600", paddingBottom: "10px" }}>
                Search in Primo for books & articles
              </Typography>
              <Box sx={{ display: "flex", border: "1px solid #d6d6d6", backgroundColor: "#f6f6f6", padding: "6px 10px" }}>
                <input type={"text"} style={{ width: "100%", border: "none", backgroundColor: "inherit" }}></input>
                <SearchIcon sx={{ fontSize: "xx-large", color: "#2877b2" }} />
              </Box>
              <Typography style={{ textAlign: "right", paddingTop: "10px", color: "#006cb7" }} >
                <Link href={"google.com"} sx={{ fontSize: { xs: "", lg: "large" } }} underline="hover">More databases and search tools</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LibrarySearch;