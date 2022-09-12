import PublicationsBox from "./Components/PublicationsBox/PublicationsBox";
import { useState } from "react";
import {Typography } from "@mui/material";
import {CalendarHeading ,} from "../../../../Styles/Calendar"
import {RecentPublicationsDate} from "../../../../Services/Utils/Data/data";
import CalendarLink from "../../../Calendar/Components/CalendarLink/CalendarLink";

const RecentPublications = () => {
  const [PublicationDate] = useState(RecentPublicationsDate);
    return (
    <>
      <Typography
  variant="body2"
  sx={CalendarHeading}
>
Recent publications
</Typography>
{PublicationDate.map((Publication) => (
              <PublicationsBox
              id={Publication.id}
              author={Publication.author}
              links = {Publication.links}
              title={Publication.title}
              date ={Publication.date}
              />
            ))}
            <CalendarLink  links="Full list in the KTH publications portal"/>
    </>
    );
  };
  
  export default RecentPublications;