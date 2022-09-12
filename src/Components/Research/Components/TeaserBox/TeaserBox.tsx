import * as React from 'react';
import {   Box,
    Typography,
    Button ,
    Grid} from "@mui/material";
import {teaserBoxHeaderWrap,teaserBox,
    teaserBoxHeader,teaserBoxHeading
} from "../../../../Styles/Study";
import SearchBar from "src/Layouts/MainLayout/Navbar/SearchBar/SearchBar";

import { CloseRounded } from "@mui/icons-material";
import {inputGroup,
    searchWidgetButton,} from "../../../../Styles/Research"


import { styled } from '@mui/material/styles';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';


const StyledInputElement = styled('input')(
  ({ theme }) => `
 
  background-color: #f6f6f6;
  margin-right: 0;
  box-shadow: none;
  width: 450px;
  font-family: "Open Sans",Arial,"Helvetica Neue",helvetica,sans-serif;
  font-size: 1rem;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 2.8em;
  box-sizing: border-box;
padding:8px 10px;

  
  overflow: visible;
  line-height: inherit;

  @media screen and (max-width: 700px) {
    width: 100%;
}
    &:focus {
      outline: 2px solid #000;
      border:1px solid #007fae;
    }
`,
);
const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement}}
      {...props}
      ref={ref}
    />
  );
});


function TeaserBox(){
    return (
        <>
       <Box sx={teaserBox}>
        <Box sx={teaserBoxHeaderWrap}>
          <Box sx={teaserBoxHeader}>
           

              <Typography sx={teaserBoxHeading}>Search publications</Typography>
   
              </Box>
        </Box>
      
        <Box sx={inputGroup}>
  
  <CustomInput aria-label="Demo input" className="input" />

    
    <Button   sx={searchWidgetButton}>Search </Button>
  
    </Box>
      
        </Box>
        </>
    );
}


export default TeaserBox;