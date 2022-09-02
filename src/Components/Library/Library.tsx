import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Container } from '@mui/system';
import LibraryLink from './Components/LibraryLink/LibraryLink';
import LibraryInfo from './Components/LibraryInfo/LibraryInfo';
import CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';
import LibrarySearch from './Components/LibrarySearch/LibrarySearch';

const links = [
  "KTH Library"
]
const Library = () => {
  return (
    <Container>
      <CustomBreadcrumbs links={links} text={" "} />
      <LibrarySearch />
      <LibraryInfo />
      <LibraryLink />

    </Container>
  );
};

export default Library;