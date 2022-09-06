
import { AlumniList } from "./Components/AlumniList/AlumniList";
import { Container } from '@mui/material';

import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import {ContainerStyle } from '../../Styles/Container/Container'
import AlumniTeaser from "./Components/AlumniTeaser/AlumniTeaser";
import Calendar from "./Components/AlumniCalendar/Calendar";
import AlumniCart from "./Components/AlumniCart/AlumniCart";
import {Box} from "@mui/material";

const    links = [
 "Alumni",
 
   ];
  const Alumni =()=>{
    return (
        <>

<Box sx={{overflowX:"hidden",}}>
  <Container sx={ContainerStyle} >
         <CustomBreadcrumbs   links={links} text={"Denna sida på svenska"}/>
         <AlumniTeaser />
<AlumniList />
<AlumniCart />
<Calendar />


<ArticleFooter title={"alumni@kth.se"}
     pageName={"Alumni"} time={"Jun 28, 2022"} />
</Container>
</Box>
        </>
    );
 } 
export default Alumni

 