import { useState } from "react";
import {LibraryNewsData} from "../../../../Services/Utils/Data/data";
import { Typography, Link,Divider ,Box} from "@mui/material";
import {NameStyle} from '../../../../Styles/BulletinLink/index'
import BulletinLink from "../../../Research/Components/BulletinLink/BulletinLink";
import {linkStyle} from '../../../../Styles/BulletinLink/index'

const LibraryNews = () => {
  const [LinkCart] = useState(LibraryNewsData);
    return (
    <>
      <Typography
    sx={NameStyle}
      variant="body2"
      mb={2.5}
     
     
    >
    News
    </Typography>
{LinkCart.map((LinkDate) => (
              <BulletinLink
              date = {LinkDate.date}
              links={LinkDate.links}
              />
            ))}
                 <Link
          sx={linkStyle}
        
          href="#"
         
          underline="hover"
       
         
          variant="subtitle1"
        >
         News archive
        </Link>
    </>
    );
  };
  
  export default LibraryNews;