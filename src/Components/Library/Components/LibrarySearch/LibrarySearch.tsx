import * as React from 'react';
<<<<<<< HEAD
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
=======
import Box from '@mui/material/Box';
import images from "../../../../Importer/Importer";
import { ContainerStyle } from '../../../../Styles/Container/Container'
>>>>>>> 1bce57bc01867045ab3278b4e7d4a39cb2fff715
import { Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
<<<<<<< HEAD

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
=======
import { makeStyles, createTheme } from '@mui/material';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 1024,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// const useStyles: any = (theme) => ({
//   searchTitle: {
//     [theme.breakpoints.down("md")]:{
//       fontSize: "large"
//   }
//   }
// })

const LibrarySearch = () => {
  // const classes = useStyles();
  return (
    <Box sx={{ margin: { xs: "0 -20px", lg: "0 -10px" } }}>
      <Container sx={ContainerStyle} >
        <Box component={"div"} sx={{ position: "relative", backgroundColor: "white" }}>
          <Box style={{}}>
            <img
              style={{ position: "relative", inset: 0 }}
>>>>>>> 1bce57bc01867045ab3278b4e7d4a39cb2fff715
              height="auto"
              width="100%"
              src={images['Library/Library(5).jpg']}
              alt="green iguana"
            />
<<<<<<< HEAD
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
=======
            <Box sx={{ width: "55%", position: "absolute", bottom: 50, left: "0", backgroundColor: "white", padding: "20px 25px 25px 35px", display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontSize: "xx-large", fontWeight: "600", paddingBottom: "10px" }}>
                Search in Primo for books & articles
              </Typography>
              <Box sx={{ display: "flex", border: "1px solid #d6d6d6", backgroundColor: "#f6f6f6", padding: "6px 10px" }}>
                <input type={"text"} style={{ width: "100%", border: "none", backgroundColor: "inherit" }}></input>
                <SearchIcon sx={{ fontSize: "xx-large", color: "#2877b2" }} />
              </Box>
              <Typography style={{ textAlign: "right", paddingTop: "10px", color: "#006cb7" }} >
                <Link href={"google.com"} sx={{ fontSize: { xs: "", lg: "large" } }} underline="hover">More databases and search tools</Link>
>>>>>>> 1bce57bc01867045ab3278b4e7d4a39cb2fff715
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LibrarySearch;