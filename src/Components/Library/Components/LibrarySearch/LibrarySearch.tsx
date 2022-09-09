import * as React from 'react';
import Styled from 'styled-components';
import Box from '@mui/material/Box';
import images from "../../../../Importer/Importer";
import { ContainerStyle } from '../../../../Styles/Container/Container';
import {
  MainBox,
  SearchBox,
  SearchBoxTitle,
  InputBox,
  SearchMore,
  SearchIcon as Icon,
  SearchMoreLink
}
  from '../../../../Styles/Library';
import { Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';

const Input = Styled.input`
    width: lg: 97%;
    border: none;
    background-color: inherit;
    outline: none;
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: 4px;
    padding-right: 8px;
    padding-left: 10px;
    font-size: large;
    color: #495057;
    &:focus {
      outline: solid 1px #000;
  }
`;

const LibrarySearch = () => {

  return (
    <Box sx={{ margin: { xs: "0 -20px", lg: "0 -10px" } }}>
      <Container sx={ContainerStyle} >
        <Box component={"div"} sx={MainBox}>
          <Box>
            <img
              height="auto"
              width="100%"
              src={images['Library/Library(5).jpg']}
              alt="green iguana"
            />
            <Box sx={SearchBox}>
              <Typography sx={SearchBoxTitle}>
                Search in Primo for books & articles
              </Typography>
              <Box sx={InputBox}>
                <Input type={"text"} />
                <SearchIcon sx={Icon} />
              </Box>
              <Typography sx={SearchMore} >
                <Link href={"google.com"} sx={SearchMoreLink} underline="hover">More databases and search tools</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LibrarySearch;