import * as React from 'react';
import {Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

import {
  inputCheckBox
} from "../../../Styles/Login"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function FormCheckbox() {
  return (
    <div>
     
     <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    // defaultChecked
                    sx={inputCheckBox}
                  />
                }
                label="Keep me signed in"
              />
            </FormGroup>
     
    </div>
  );
}
