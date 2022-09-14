
import { Typography, Box,} from "@mui/material";
import {CoOperationText,teaserBoxHeaderWrap,teaserBox,
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

              <Typography sx={teaserBoxHeading}>
KTH and society</Typography>
   

        <Box>
          <Typography sx={CoOperationText}>
          Through close collaboration with the surrounding society,
           KTH is working to find sustainable solutions to today's major societal challenges.
          </Typography>
        </Box>
        </Box>
        </>
    );
}


export default TeaserBox;