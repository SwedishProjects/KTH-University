import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  Grid,
  SelectChangeEvent,
  Collapse,
  Modal,
} from "@mui/material";

import { navbarItems } from "../../../Services/Utils/Data/data";
import { useTheme } from "@mui/material/styles";

import { MenuRounded, KeyboardArrowDown } from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import {
  AntTab,
  AntTabs,
  appBarStyles,
  menuIconStyles,
  container ,
  gradientBorder ,
} from "../../../Styles/Appbar";
import TabDrawer from "./TabDrawer/TabDrawer";

import SearchBar from "./SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import SecondaryMenu from "./SecondaryMenu/SecondaryMenu";
import SiteName from "./SiteName/SiteName";


function Navbar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [modalType, setModalType] = useState("login");

  const [displayDrawer, setDisplayDrawer] = useState({
    left: false,
    right: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const { pathname } = useLocation();

  

  type Anchor = "left" | "right";

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    if (!matches) {
      setDisplayDrawer({ ...displayDrawer, [anchor]: open });
    }
  };
  const loginModalHandler = (open: boolean) => () => {
    setOpenLoginModal(open);
  };


  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };

  type Modal = "login" | "register" | "reset";

  const modalTypeToggle = (type: Modal) => {
    setModalType(type);
  };

  useEffect(() => {
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180 && lastScroll < window.scrollY) {
        setCollapse(false);
      } else {
        setCollapse(true);
      }
      lastScroll = window.scrollY;
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <Fragment >
      <AppBar sx={appBarStyles}>
        <Box sx={container} >
        <Collapse in={collapse} timeout={600}>
          {/* <Container maxWidth={"xl"} sx={{ position: "relative" }}> */}
            <Toolbar sx={{ justifyContent: "space-between" }} disableGutters>
              <Box>
                <Box onClick={toggleDrawer("left", true)}>
                  <MenuRounded sx={menuIconStyles} />
                </Box>
              </Box>
              <Grid item xs={12} md={12} lg={12}>
            <Box
            sx={{
              
              display:"flex",
              justifyContent:"space-between",
              width:"100%",
              
            }}
            >
            <SiteName />
              <SecondaryMenu />
            </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
            <Box sx={{
               float:"right",
                  display:"flex",
                  justifyContent:"space-between",
                  width:"100%",
                  
              
            }}>
             

              {!openSearchBar && (
                <Fragment >
                  <AntTabs value={pathname}>
                    {navbarItems.map((item) => (
                      <AntTab
                        key={item.id}
                        label={item.name}
                        component={() => (
                          <Box
                            component={Link}
                            to={item.route}
                            className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-csphq2-MuiButtonBase-root-MuiTab-root"
                            sx={{
                              textDecoration:"none",
                              color: "#000",
                              fontSize: "1.25rem",
                              lineHeight: "1.375",
                              padding: "8px 3px",
                              textTransform: "capitalize",
                              "&:hover ": {
                                zIndex: 99,
                                borderBottom: "3px solid #006cb7",
                                

                              },
                            
                              overflow: "visible !important",
                            }}
                          >
                            <Box>{item.name}</Box>
                          

                           
                          </Box>
                        )}
                        value={`${item.route}`}
                        iconPosition="right"
                        sx={{
                          color: "",
                          borderBottom: "",
                        }}
                      />
                    ))}
                  </AntTabs>
                 
                </Fragment>
              )}
                <SearchBar />
          </Box>
          </Grid>
          <Box sx={gradientBorder}></Box>
   
            </Toolbar>
          {/* </Container> */}
        
          {/*--------------------- drawers ---------------- */}
       
          <Box
         
            >
         <TabDrawer
            displayDrawer={displayDrawer}
            toggleDrawer={toggleDrawer}
          />


         </Box>
        </Collapse>
        </Box>
      </AppBar>
     
      <Box sx={{ marginTop: { xs: "64px", md: "90px" } }}></Box>
     
      </Fragment>
   
  );
}

export default Navbar;
