
import { Typography ,Box} from "@mui/material";
import {NameStyle} from '../../../../../../Styles/Blogs'
type props = {
  title: string;
};

const CardTitle = ({ title }: props) => {
  return (
    <Box >
    <Typography
    sx={NameStyle}
      variant="h2"
      mb={2.5}
     
     
    >
      {title}
    </Typography>
    </Box>
  );
};

export default CardTitle;
