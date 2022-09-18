import { useState } from "react";
import {ResearchNewsData} from "../../../../Services/Utils/Data/data";
import { Typography,} from "@mui/material";
import {NameStyle} from '../../../../Styles/BulletinLink/index'
import BulletinLink from "../BulletinLink/BulletinLink";
const ResearchNews = () => {
  const [LinkCart] = useState(ResearchNewsData);
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
    </>
    );
  };
  
  export default ResearchNews;