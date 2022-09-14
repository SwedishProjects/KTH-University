

import { Container } from '@mui/system';
import LibraryLink from './Components/LibraryLink/LibraryLink';
import LibraryInfo from './Components/LibraryInfo/LibraryInfo';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import LibraryTeaser from './Components/LibraryTeaser/LibraryTeaser';
import {ContainerStyle } from '../../Styles/Container/Container'

const links = [
  "KTH Library"
]
const Library = () => {
  return (
    <Container sx={ContainerStyle} >
      <CustomBreadcrumbs links={links} text={" "} />
      <LibraryTeaser />
      <LibraryInfo />
      <LibraryLink />

    </Container>
  );
};

export default Library;