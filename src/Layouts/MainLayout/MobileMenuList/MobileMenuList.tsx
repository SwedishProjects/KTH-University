import * as React from 'react';

import{ List,
    Box,
    Drawer,
    Button,
    ListItem,
    ListItemButton,
    Divider
} from '@mui/material';


import SecondaryMenuMobile from '../SecondaryMenuMobile/SecondaryMenuMobile';
import MenuMobile from '../MenuMobile/MenuMobile';


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
    
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{width:"100%"}}
    >
      <MenuMobile />
        <SecondaryMenuMobile />
        {/* tow */}
     
     
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{
                position: "fixed",
                zIndex: "25",
                top: {xs:"90px",sm:"50px",md:"25px",lg:"20px",},
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
            }}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{backgroundColor:"#fff"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
