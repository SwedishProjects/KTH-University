import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
const LibraryButton = () => {
    return (
    <>
      <Button variant="contained">Contained</Button>
      <Divider variant="inset" component="li" />
    </>
    );
  };
  
  export default LibraryButton;