
import { Typography, Link, Grid ,Box} from "@mui/material";
import {ContactTextStyle} from '../../../../Styles/ContactKth/index'


type props = {
  text: string;

};

const TextKth = ( props) => {
  return (
    <Box >
    <Typography
    sx={{
        lineHeight:" 1.5625",
        marginBottom: "16px",
        fontSize: "1.125rem",
        fontFamily:" Georgia,'garamond pro',garamond,'times new roman',times,serif",
        margin: "0 0 27px",
        maxWidth:" 730p",
        fontWeight:(props.text==="Emergency number: +46 8 790 77 00")? "bolder" : "normal",
    }}
      variant="body2"
      mb={2.5}
     
     
    >
      {props.text}
    </Typography>
    </Box>
   
  );
};

export default TextKth;
