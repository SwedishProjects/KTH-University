import BusinessLink from './Components/BusinessLink/BusinessLink'
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import {  Container,Grid , } from "@mui/material";
import {ContainerStyle } from '../../Styles/Container/Container'
import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import CoOperationTeaser from './Components/CoOperationTeaser/CoOperationTeaser';
import NewsEvents from './Components/NewsEvents/NewsEvents';
import CollaborateKTH from './Components/CollaborateKTH/CollaborateKTH';
const links=[
  "Business and Community"
]



const CoOperation = () => {
 

  return (
  <>
      <Container sx={ContainerStyle} >
    <CustomBreadcrumbs links={links} text={"Denna sida på svenska"} />
    <CoOperationTeaser />
      <BusinessLink />
      <NewsEvents />
      <CollaborateKTH />
    <ArticleFooter title={"nickyr@kth.se"}
     pageName={"Business and Community"} time={"Mar 27, 2022"} />

</Container>
  </>
    );
  };
  
  export default CoOperation;