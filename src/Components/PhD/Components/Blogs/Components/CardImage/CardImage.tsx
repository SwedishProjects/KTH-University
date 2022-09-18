import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import {imageStyle} from '../../../../../../Styles/PhD'

type props = {
  title: string;
  image: string;
};


const CardImage = ({ image, title }: props) => {
  return (
    <Link href='#'>
      <CardMedia component='img' image={`${image}`} alt={`${title}`}  sx={imageStyle}/>
    </Link>
  );
};

export default CardImage;
