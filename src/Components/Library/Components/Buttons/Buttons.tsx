import {  Link, } from "@mui/material";
import {ButtonStyle} from "../../../../Styles/Library"
type props = {
    href: string;
    title :string;
  
  };
const Buttons = ({href ,title }: props) => {
  return (
    <>
      <Link
          sx={ButtonStyle}
          
          href={href}
         
          underline="none"
          mb={1.5}
         
          variant="subtitle1"
        >
           {title}
        </Link>
    </>
  );
};

export default Buttons;