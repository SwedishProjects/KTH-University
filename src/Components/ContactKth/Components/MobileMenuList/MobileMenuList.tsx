import * as React from 'react';

import{ 
    Box,
    Drawer,
    Button,
  
} from '@mui/material';

import { MenuRounded, } from "@mui/icons-material";
import SecondaryMenuMobile from '../../../../Layouts/MainLayout/SecondaryMenuMobile/SecondaryMenuMobile';

import ContactNav from "../ContactNav/ContactNav";

type Anchor =  'left' ;

export default function MobileMenuList() {
  const [state, setState] = React.useState({
    
    left: false,
  
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
    sx={{width:"768px",
    marginTop:{xs:"80px",sm:"35px",md:"0px",lg:"0px",}
  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    
        
         
<ContactNav />
<SecondaryMenuMobile />
             
            
         
     
 
     
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}  sx={{
                position: "fixed",
                zIndex: "25",
                top: {xs:"90px",sm:"50px",md:"0px",lg:"0px",},
                right: "15px",
                padding: "5px 15px 15px",
                backgroundColor: "#fff",
                border: "5px solid #fff",
                borderLeft:" 0",
                borderRight: "0",
                transform: "rotate(0)",
                transition: ".3s ease-in-out",
                cursor: "pointer",
            color:"#000"
            }}>
              {/* {anchor} */}
              <MenuRounded sx={{
                   color: "#007fae",
                   fontSize:{xs:"35px",sm:"35px",md:"0px",lg:"0px",},
              }}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
