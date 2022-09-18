

import {  Container,Grid , } from "@mui/material";

import LibraryLink from './Components/LibraryLink/LibraryLink';
import LibraryInfo from './Components/LibraryInfo/LibraryInfo';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import LibraryTeaser from './Components/LibraryTeaser/LibraryTeaser';
import {ContainerStyle } from '../../Styles/Container/Container'
import LibraryButton from './Components/LibraryButtons/LibraryButtons';
import AppliesSummer from "./Components/AppliesSummer/AppliesSummer"
import LibraryNews from './Components/LibraryNews/LibraryNews';
import LibraryCalendar from "./Components/LibraryCalendar/LibraryCalendar";
const links = [
  "KTH Library"
]
const Library = () => {
  return (
    <Container sx={ContainerStyle} >
      <CustomBreadcrumbs links={links} text={" "} />
      <LibraryTeaser />
      <LibraryInfo />
      <LibraryButton />
      <AppliesSummer />
      <Grid container spacing={2}>
   
       <Grid item xs={12} sm={6} md={6} lg={6}>
         <LibraryNews />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
       <LibraryCalendar />
        </Grid>
        </Grid>
      <LibraryLink />

    </Container>
  );
};

export default Library;