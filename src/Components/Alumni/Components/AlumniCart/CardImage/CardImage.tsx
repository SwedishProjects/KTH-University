
import {Link,CardMedia } from '@mui/material';
import {imageStyle} from '../../../../../Styles/Alumni'

type props = {
  title: string;
  image: string;
};


const CardImage = ({ image, title }: props) => {
  return (
    <Link href='#' sx={{float:"right"}}>
      <CardMedia component='img' image={`${image}`} alt={`${title}`}  sx={imageStyle}/>
    </Link>
  );
};

export default CardImage;
