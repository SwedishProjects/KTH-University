import * as React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import{ Box,
    List,
    ListItem,
   
    ListItemText,
   
    Grid,
    Typography,}  from '@mui/material';

import {mainMenu} from "../../../../Styles/ContactKth"



function ContactNav(){
  
    return (
        <>
         <Box sx={mainMenu} >
          <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="nav">
               <li class="parentLink"><a href="https://www.kth.se/en/om">About KTH</a></li>
            </ul>

             
              <ul class="nav nav-ancestor">
              <li><span class="nav-item ancestor">Contact</span></li>
             </ul>
              <ul class="nav nav-list">
          <li class="nav-item selected"><span class="nav-link inactiveLink">Contact KTH</span></li>
              
                
              </ul>
            
             
            
              <script>
                 processTaskList();
              </script>
            

          </div>
         </Box>
        </>
    )
}

export default ContactNav;