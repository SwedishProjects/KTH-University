import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import {
    Box,
   
    TextField,
    Typography,
    CardMedia,
  } from "@mui/material";
  import {
  loginText,
  } from "../../../Styles/Login"
import { styled } from '@mui/system';
type props = {
    title: string;
    place :string ;
  
  };

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;

  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 0px;
  color: rgb(38, 38, 38);
  background: rgba(255, 255, 255, 0.4);
  border: none;
  outline-style: none;
  outline-width: 0px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
  text-align: start;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  user-select: text;
  width: 310px;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  -webkit-appearance: none;
  -webkit-locale: "en";
  -webkit-rtl-ordering: logical;
  -webkit-border-image: none;
  border-bottom-color:  #4488dd;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-top : 15px;

  &:hover {
  
  }

  &:focus {
    border-bottom-color: #4488dd;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    
    
 
  }
  @media (max-width: 600px), (max-height: 392px)
  #brandingWrapper {
      display: none;
  }
`,
);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

export default function Input({title  , place}: props) {
  return( 
      <>
    <Typography
    sx={loginText}
      variant="h2"
    >
{title}
    </Typography>
  <CustomInput aria-label="Demo input" placeholder={place} />
  </>
  );
}
