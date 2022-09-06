import StudiesList from './Components/StudiesList/StudiesList'
import  ArticleFooter from '../ArticleFooter/ArticleFooter';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import {ContainerStyle } from '../../Styles/Container/Container'
import { Container } from "@mui/material";
import StudyTeaser from './Components/StudyTeaser/StudyTeaser';

const    links = [
 "Study at KTH",
 
   ];

const Studies = () => {
    return (
    <>
      <Container sx={ContainerStyle} >

    <CustomBreadcrumbs   links={links} text={" "} />
    <StudyTeaser />
    <StudiesList />
    <ArticleFooter title={"KTH International Student Recruitment"}
     pageName={"Study at KTH"} time={"Jun 28, 2022"} />
</Container>
    </>
    );
  };
  
  export default Studies;