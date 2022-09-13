import { useState } from "react";
import {ResearchBulletinData} from "../../../../Services/Utils/Data/data";
import { Typography, } from "@mui/material";
import {NameStyle} from '../../../../Styles/BulletinLink/index'
import BulletinLink from "../BulletinLink/BulletinLink";
const ResearchBulletin = () => {
  const [LinkCart] = useState(ResearchBulletinData);
    return (
    <>
 <Typography
    sx={NameStyle}
      variant="body2"
      mb={2.5}
     
     
    >
   Research bulletin
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
  
  export default ResearchBulletin;