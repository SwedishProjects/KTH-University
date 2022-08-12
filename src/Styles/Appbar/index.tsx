import { styled } from "@mui/material/styles";
import { Tab, Tabs, Box, Typography, Button } from "@mui/material";

interface StyledTabProps {
  label: string;
  component: any;
  value: string;
  iconPosition?: any;
}

export const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "capitalize",
  minWidth: 0,
  [theme.breakpoints.up("sm")]: {
    minWidth: 0,
  },
  height: "90px",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: 15,
  marginRight: theme.spacing(1),
  color: "rgba(0, 0, 0, 0.85)",
  borderBottom: "3px solid white",
  textDecoration:"none",

  "&:hover": {
    borderBottom: "3px solid #006cb7",
   
    
  },
  "&.Mui-selected": {
    
    borderBottom: "3px solid #006cb7",
    borderTop:"3px solid #006cb7"
  },
}));

export const AntTabs = styled(Tabs)(({ theme }) => ({
  overflow: "visible !important",
  textDecoration:"none",
  padding:"10px 15px",
  width:"100%",
  "& .MuiTabs-scroller ": {
    overflow: "visible !important",
  },
  "& .MuiTabs-indicator": {
    // backgroundColor: "#f03637",
    display:"none",
   
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  position: "relative",
}));


export const menuIconStyles = {
  display: {
    sx: "block",
    md: "none",
  },
  fontSize: "35px",
  color: "common.digitaBlack",
  cursor: "pointer",
  // "&:hover": { color: "#f03637" },
};

export const IconWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  cursor: "pointer",
  "&:hover .MuiSvgIcon-root": { color: theme.palette.common.KTHred },
}));

export const appBarStyles = {
  width: "100%",
  // paddingRight:"15px",
  // paddingLeft:" 15px",
  marginRight:" auto",
  marginLeft:" auto",
  padding: "0 15px",
  backgroundColor:" #fff",
  boxSizing: "border-box",
};
export const container ={
  margin: "0 auto",
    maxWidth: "1228px",
    padding: "15px 0 20px",
}

// =============================  SecondaryMenu   ================================

export const secondaryMenu ={
  display: "none",
  margin: "0",
  // position: "relative",
  // top: "2px",
}







export const listStyle ={
  "& .UlStyle ": {
    listStyleType:" none",
    // position:" relative",
    // top: "-7px",
  },

  "& .LiStyle ": {
    marginBottom: "14px",
    lineHeight: "1.5",
    display:"inline-block",
    paddingRight: "15px",
    float: "left",
      // marginBottom: "0",
  }


}







// =======================TopNavbar ==========================
export const   kpmbar={
  margin: "0 auto",
  maxWidth: "1228px",
  position: "relative",
}
export const fault ={
  color: "#fff",
  display: "block",
  lineHeight: "2em",
  margin: "0 10px",
  textDecoration: "underline",
}
export const barsection ={
  verticalAlign: "middle",
  float: "right",
}
export const right ={
  float: "right",
}
export const LinkStyle ={
  background: "transparent",
  color: "#fff",
  display: "block",
  height: "2rem",
  lineHeight: "2rem",
  padding: "0 10px",
  // -webkit-transition: background 400ms",
  transition: "background 400ms",
  textDecoration: "none",
  '&:hover': {
    background: "#007fae",
  }
}

export const menuPanelInner ={
  position: "relative",
  maxWidth: "calc(1228px + 3em)",
  margin: "0 auto 2em",
  padding: "0 0.6em 1em 0",
}
export const LinkStylehelp ={
  color: "#fff",
  backgroundColor: "#65656c",
  padding: "15px",
  margin: "15px 0 0 0",
}
export const loginContent={
  position: "absolute",
  right: "0",
}
export const hide ={
  display: "none"
}
export const kthPmenu ={

  fontSize: "16px",
  lineHeight: "1.231",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  zIndex: "9999",
}
export const kthpmWrapper= {
  backgroundColor: "#65656c",
  overflow: "hidden",
  width: "100%",
  padding: "0 5px",
}

export const gradientBorder ={
  height: "3px",
  backgroundImage: "linear-gradient(to left,#005ea4,#5c98c4)",
}

