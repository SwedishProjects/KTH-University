

import {teaserBoxHeaderWrap,teaserBox,
  teaserBoxHeader,teaserBoxHeading
} from "../../../../Styles/Library"



import SearchIcon from '@mui/icons-material/Search';
import { Typography ,Box,
Link} from '@mui/material';





const LibrarySearch = () => {

return (
  <Box sx={teaserBox}>
  <Box sx={teaserBoxHeaderWrap}>
    <Box sx={teaserBoxHeader}>
        </Box>
  </Box>

            <Typography sx={teaserBoxHeading}>
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
      

    

);
};

export default LibrarySearch;