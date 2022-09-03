
import { Typography, Link, Grid ,Box} from "@mui/material";
import {TextStyle} from '../../../../../../Styles/PhD'



type props = {
  text: string;

};

const CardDescription = ({text }: props) => {
  return (
    <Box >
    <Typography
    sx={TextStyle}
      variant="body2"
      mb={2.5}
     
     
    >
      {text}
    </Typography>
    </Box>
   
  );
};

export default CardDescription;
