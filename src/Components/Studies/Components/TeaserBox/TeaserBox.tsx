
import { Typography, Box,} from "@mui/material";
import {teaserBoxBody,teaserBoxHeaderWrap,teaserBox,
    teaserBoxHeader,teaserBoxHeading
} from "../../../../Styles/Study"
function TeaserBox(){
    return (
        <>
       <Box sx={teaserBox}>
        <Box sx={teaserBoxHeaderWrap}>
          <Box sx={teaserBoxHeader}>
              </Box>
        </Box>

              <Typography sx={teaserBoxHeading}>Study at KTH</Typography>
   

        <Box>
          <Typography sx={teaserBoxBody}>KTH Royal Institute of Technology is Sweden's leading technical university—ranked 89 in the 2022 QS World University Rankings. At KTH, you will access a vibrant student life and a prestigious academic environment.</Typography>
        </Box>
        </Box>
        </>
    );
}


export default TeaserBox;