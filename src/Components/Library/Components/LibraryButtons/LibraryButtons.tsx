import { Box } from '@mui/material';
import * as React from 'react';
import { BtnBox, LibraryButtonsContainer, BtnsBox } from '../../../../Styles/Library';
import LibraryButton from '../LibraryButton/LibraryButton';
import { Container } from '@mui/system';


const LibraryButtons = () => {
  return (
    <Box sx={BtnsBox}>
      <Container sx={LibraryButtonsContainer}>
        <Box sx={BtnBox}>
          <LibraryButton title={"My Library account"} />
          <LibraryButton title={"Request matrials"} />
          <LibraryButton title={"Book a Group study room"} />
          <LibraryButton title={" Talking books"} />
        </Box>
      </Container>
     </Box>
  );
};

export default LibraryButtons;