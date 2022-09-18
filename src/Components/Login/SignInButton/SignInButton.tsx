import * as React from 'react';
import { Typography, Link, Grid ,Box} from "@mui/material";
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledTypeMap,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { OverridableComponent } from '@mui/types';
type props = {
  title: string;
 

};
const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(ButtonUnstyled)`
margin-left: -2px;
left: 229px;
bottom: -30px;
height: 32px;
width: 108px;
align-items: flex-start;
    background-color: rgb(0, 103, 184);
    border-bottom-color: rgb(0, 103, 184);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(0, 103, 184);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(0, 103, 184);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(0, 103, 184);
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    cursor: pointer;
    direction: ltr;
    font-family: "Segoe UI Webfont", -apple-system, "Helvetica Neue", "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi, "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: normal;
  
    letter-spacing: normal;
    line-height: 25px;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-top: 0px;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 4px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 3px;
    position: relative;
    text-align: center;
    text-indent: 0px;
    text-overflow: ellipsis;
    text-rendering: auto;
    text-shadow: none;
    text-size-adjust: 100%;
    touch-action: manipulation;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    
    word-spacing: 0px;
    writing-mode: horizontal-tb;
    -webkit-appearance: none;
    -webkit-rtl-ordering: logical;
    -webkit-border-image: none;
    @media (max-width: 400px), (max-height: 392px)
{
 margin-left: -60px;
}
    @media (max-width: 300px), (max-height: 392px)
 {
  margin-left: -150px;
}


  &:hover {
    background-color: rgb(0, 103, 160);
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

 
` as OverridableComponent<ButtonUnstyledTypeMap>;

export default function SignInButton({title  }: props) {
  return (
   <Box  sx={{display:"flex" ,justifyContent:"flex-start",}}>
       
      <CustomButton component="span">{title}</CustomButton>
   
      </Box>
  );
}