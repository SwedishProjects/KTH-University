import {  Link,Button } from "@mui/material";
import {ButtonStyle} from "../../../../Styles/Library"
type props = {
    href: string;
    title :string;
  
  };
const Buttons = ({href ,title }: props) => {
  return (
    <>
      <Button
          sx={ButtonStyle}
          
     
          
        >
           {title}
        </Button>
    </>
  );
};

export default Buttons;