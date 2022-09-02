import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import{ Box,
    List,
    ListItem,
   
    ListItemText,
   
    Grid,
    Typography,}  from '@mui/material';



function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));


function ContactList(){
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    return (
        <>
          <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
   
 
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography> */}
          <Demo>
            <List dense={dense}>
              
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={ null}
                  />
                </ListItem>
            
            </List>
          </Demo>
        </Grid>
       
       
      </Grid>
    </Box>
        </>
    )
}

export default ContactList;