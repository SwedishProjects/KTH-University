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
  zIndex: "25",
 float:"right",
  // padding: "5px 15px 15px",
  backgroundColor: "#fff",
  border:" 5px solid #fff",
  borderLeft: "0",
  borderRight: "0",
  transform: "rotate(0)",
  transition:" .3s ease-in-out",
  cursor: "pointer",
 
  // marginTop: "calc(var(--kpm-bar-height,2em) + 1px)",
  fontSize:" 2.25rem",
  lineHeight: "1",
  color:"#007fae",
  "& .focus":{
    border:" 5px solid  #ffc107",
  borderRadius: "0.25rem",
 

}
};

export const IconWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  cursor: "pointer",
  "&:hover .MuiSvgIcon-root": { color: theme.palette.common.KTHred },
}));

export const appBarStyles = {
  width: "100%",

  marginRight:" auto",
  marginLeft:" auto",
  padding: "0 15px",
  backgroundColor:" #fff",
  boxSizing: "border-box",
};
export const container ={
  width: "100%",
  margin: {sm:"0",lg:"0 auto"},
    maxWidth: "1228px",
    padding: {xs:"85px 0 30px",sm:"70px 0 30px" ,md:"100px 0 30px",lg:"200px 0 30px"},
    // padding:"15px 0 20px ",
}

// =============================  SecondaryMenu   ================================

export const secondaryMenu ={
  display: "none",
  margin: "0",
  // position: "relative",
  // top: "2px",
}







export const listStyle ={
  // display:{sm:"none",md:"none",lg:"block"},
  display:"none",
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

  "& .kpmloginhelp":{
    display:"block"
  }
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
    "& .kpmloginhelp":{
      display:"block"
    }
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
  position: "static",
  right: "0",
  width:{sm:"100%" , lg:"30%"},
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

// ===========================  TopNavbarModal  =================================
export const kpmloginhelpText = {
  color: "#fff",
 
  // margin: "15px 0 0 0",
  // padding: "15px",
  lineHeight:" 1.5",
  fontFamily: "inherit",
    fontSize: "100%",
    fontWeight: "normal",
    marginBottom:"0.5rem"
}

export const kpmloginhelp ={
  margin: "auto",
  marginTop:"1rem",
  width:{sm:"100%" , lg:"30%"},
  padding: "15px",
  display:"none",
  // justifyContent:"center",
  // alignContent:"center",
  position: "relative",
  backgroundColor: "#65656c",

  
    
}



