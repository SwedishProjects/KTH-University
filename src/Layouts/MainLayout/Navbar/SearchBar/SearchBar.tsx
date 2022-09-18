import { CloseRounded } from "@mui/icons-material";
import {
  Box,
  Typography,
  Button ,
  Grid
} from "@mui/material";
import * as React from 'react';
import {searchWidget,
  searchWidgetContainer ,
  searchWidgetButton ,
  inputGroup ,
  labelText


} from '../../../../Styles/SearchBar/index'
import { styled } from '@mui/material/styles';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';


const StyledInputElement = styled('input')(
  ({ theme }) => `
 
  background-color: #f6f6f6;
  margin-right: 0;
  box-shadow: none;
  width: 100%;
  font-family: "Open Sans",Arial,"Helvetica Neue",helvetica,sans-serif;
  font-size: 1rem;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: auto;
  box-sizing: border-box;
padding:8px 10px;
flex-grow:1 ;
  
  overflow: visible;
  line-height: inherit;

 

    &:focus {
      outline: 2px solid #000;
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

function SearchBar() {
  return (
    <Box id="widget_ouhxhrra" sx={searchWidgetContainer }>
      <Box sx={searchWidget}>
     
        <Box className="searchInputBar"
           sx={{
              
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            width:"100%",
            marginTop: "8px"
            
          }}
        >
       
    <Box className="searchAutoCompleteField"
     sx={{
              
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      width:"100%",
     
      
    }}
    >
      <Box >
       
        <Typography variant="body2" component="p" sx={labelText}> Search the KTH website</Typography>
        </Box>
       <Box sx={inputGroup}>
  
  <CustomInput aria-label="Demo input" className="input" />

    
    <Button   sx={searchWidgetButton}>Search </Button>
  
    </Box>
    </Box>
    </Box>
  
            
            </Box>
           
           
            </Box>
  );
}

export default SearchBar;
