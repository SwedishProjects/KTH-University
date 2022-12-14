
import { AlumniList } from "./Components/AlumniList/AlumniList";
import { Container } from '@mui/material';
import { wraperPage } from "../../Styles/About";
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import {ContainerStyle } from '../../Styles/Container/Container'
const    links = [
 "Alumni",
 
   ];
  const Alumni =()=>{
    return (
        <>
  <Container sx={ContainerStyle} >
         <CustomBreadcrumbs   links={links} text={"Denna sida på svenska"}/>
         
<AlumniList />

<ArticleFooter title={"alumni@kth.se"}
     pageName={"Alumni"} time={"Jun 28, 2022"} />
</Container>
        </>
    );
 } 
export default Alumni

 