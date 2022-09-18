
import { Typography, Box,} from "@mui/material";
import {CoOperationText,teaserBoxHeaderWrap,
    teaserBoxHeader,teaserBoxHeading
} from "../../../../Styles/Study";
import {teaserBox,} from "../../../../Styles/CoOperation"
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