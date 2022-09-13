
import {Link ,CardMedia} from '@mui/material';
import {imageStyle} from '../../../../Styles/Blogs/index'

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
