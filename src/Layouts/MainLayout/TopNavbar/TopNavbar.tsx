import {
   
    Box,
   
    Link
  } from "@mui/material";
  import {
    kpmbar,
    fault ,
    LinkStyle,
    kthpmWrapper ,
    kthPmenu,
    barsection,
  } from "../../../Styles/Appbar/index";

function TopNavbar (){
    return (
        <>
        <Box sx={kthPmenu}   lang="sv" aria-label="Personliga menyn">
<Box sx={kthpmWrapper}>
<Box sx={kpmbar}>
 <Link href="#" sx={fault}>
Kunde inte hämta personlig information (klicka för att försöka igen) </Link>
</Box></Box>
</Box>
<Box sx={kthPmenu}   lang="en" aria-label="Personliga menyn">
	
  <Box sx={kthpmWrapper}>
    
    <Box sx={kpmbar}>
      
        <Box sx={barsection}>
        <Link sx={LinkStyle} href="#" >Log in </Link>
        </Box>
      
    </Box>
  </Box>

  

  


</Box>
        </>
    )
}
export default TopNavbar