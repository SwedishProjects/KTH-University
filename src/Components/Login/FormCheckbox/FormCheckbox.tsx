import * as React from 'react';
import {
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import {
  Box,
 
  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
import {
  inputCheckBox
} from "../../../Styles/Login"
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function FormCheckbox() {
  return (
    <div>
     
     {/*  <FormGroup>
             <FormControlLabel
                control={
                  <Checkbox
                    // defaultChecked
                    sx={inputCheckBox}
                  />
                }
                label="Keep me signed in"
              />
            </FormGroup> */}

          <Typography     sx={{display:"flex" ,justifyContent:"flex-start",
          marginLeft:"-10px",
          marginTop:"10px",
          
          }}>
          <Checkbox {...label}      />
             <Typography
     sx={inputCheckBox}
      variant="body2"
    >
Keep me signed in
    </Typography>
     
          </Typography>
    </div>
  );
}
