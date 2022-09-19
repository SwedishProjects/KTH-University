import {ContainerStyle } from '../../../Styles/Container/Container';
import SiteName from './SiteName/SiteName';
import SecondaryMenu from './SecondaryMenu/SecondaryMenu';
import MobileMenuList from '../MobileMenuList/MobileMenuList';
import {
  Box,Link,Container
} from "@mui/material";
import SearchBar from './SearchBar/SearchBar';
import Menu from '../Menu/Menu';

function Navbar(){
  return(
<>
<Box 
sx={{
  backgroundColor:"#fff"
}}>
<Container sx={ContainerStyle} >
<Box sx={{
  display:"flex" ,
  justifyContent:"space-between"
}}>

<SiteName />
<Box 
sx={{
  display:{xs:"none",sm:"none",md:"block",lg:"block"}
}}
>
  
  <SecondaryMenu />
  </Box>
  <Box 
sx={{
  display:{xs:"block",sm:"block",md:"none",lg:"none"}
}}
>
  <MobileMenuList />
  </Box>
</Box>

<Box 
sx={{
  display:"flex" ,
  justifyContent:"space-between",
  marginBottom:"-15px"
}}
>
<Box 
sx={{
  display:{xs:"none",sm:"none",md:"block",lg:"block"}
}}
>
<Menu />
</Box>
  <SearchBar />
</Box>















</Container  >
</Box>
<Box sx={{
  height: {xs:"3px",lg:"6px"},
  backgroundColor:"#005ea4",
}}></Box>
</>
  )
}


export default Navbar;