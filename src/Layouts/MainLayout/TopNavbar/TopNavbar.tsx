import {
    Box,Link,
  } from "@mui/material";
  import { useState } from "react";
  import {
    kpmbar,
    fault ,
    LinkStyle,
    kthpmWrapper ,
    kthPmenu,
    barsection,
  } from "../../../Styles/TopNavbar/index";
  import TopNavbarModal from "./TopNavbarModal/TopNavbarModal";
import {LoginNavbarInfo} from "../../../Services/Utils/Data/data";
function TopNavbar (){
  const [LoginInfo] = useState(LoginNavbarInfo);
    return (
        <>
        <Box sx={kthPmenu}  >
<Box sx={kthpmWrapper}>
<Box sx={kpmbar}>
 <Link href="#" sx={fault}>
Kunde inte hämta personlig information (klicka för att försöka igen) </Link>
</Box>
</Box>
</Box>
<Box sx={kthPmenu}   lang="en" aria-label="Personliga menyn">
	
  <Box sx={kthpmWrapper}>
    
    <Box sx={kpmbar}>
      
        <Box sx={barsection}>
        {LoginInfo.map((item) => (
        <Link sx={LinkStyle} href={item.route} >  {item.name} </Link>
      
        ))}
        </Box>
      
    </Box>
  </Box>

  

  
<TopNavbarModal />

</Box>

        </>
    )
}
export default TopNavbar