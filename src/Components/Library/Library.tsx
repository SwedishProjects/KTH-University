import * as React from 'react';

import {Divider,Button} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import LibraryLink from './Components/LibraryLink/LibraryLink';
import  CustomBreadcrumbs from '../CustomBreadcrumbs/CustomBreadcrumbs';

const links=[
  "KTH Library"
]
const Library = () => {
    return (
    <>
    <CustomBreadcrumbs links={links} text={" "} />
<LibraryLink />

     
    </>
    );
  };
  
  export default Library;