import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
export const TeaserBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top:" 50px",
    left: "0px",
    width: "67%",
    background: "#fff",
    paddingTop: "15px",
    paddingLeft:" 35px",
    paddingRight: "25px",
    paddingBottom: "15px",
    [theme.breakpoints.up("md")]: {
        position:" relative",
        top:" 0px",
        width: "100%",
        padding:" 20px 0px 0px 0px",
        left: "0px",
    },
    
  }));


 export const teaserBoxHeaderWrap={
    display: "flex",
    flexWrap:" wrap",
    paddingBottom:" 0px",

 }
export const  teaserBoxHeader ={
    flex: "50",
    alignSelf:" flex-end",
    display:" flex",
    justifyContent:" flexStart",
    whiteSpace: "nowrap",
    overflow:" hidden",

}
 export const TeaserBoxHeading =styled(Box)(({ theme }) => ({

    fontSize: "1.875rem !important",
    fontWeight:" 600 !important",
    marginBottom: "10px !important",
    [theme.breakpoints.up("sm")]: {
        fontSize:" 1.5rem !important",
        fontWeight:" 600 !important",
        marginBottom: "14px !important",
    },
}));
 export const teaserBoxBody={
    maxWidth:" 100%",
    fontSize:" 1rem",
    fontWeight:" 400",
    color:" #000",
    lineHeight: "1.5",
    
    margin: "0 0 14px",
    marginTop:" 20px",
    marginBottom: "16px",
 }


export const AlumniButton={

    color: "#fff",
    backgroundColor:" #007fae",
    borderColor:" #007fae",
    cursor:" pointer",
    padding:" 0.5rem 1.5rem",
    borderRadius:" 0.25rem",
    border: "1px solid transparent",
    textAlign: "center",
    verticalAlign:" middle",
    fontSize: "1rem",
    lineHeight:" 1.5",
    marginTop:" 0",
    marginBottom:"14px",
    fontWeight:" 600",
    height: "auto",
    minHeight: "44px",

}


//------------Cart Style -------------------------------


export const TextStyle ={
    fontSize:" 1rem",
    fontWeight: "400",
    color:" #000",
    lineHeight: "1.5",
    maxWidth: "100%",
}


export const imageStyle ={
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: "100%",
    height: {md:"100%" ,xs:"100%",sm:"100%" , lg:"auto"},
    width:"auto",
    overflow:" hidden",
    // float:"right
}


export const linkStyle ={
    fontSize: "1rem",
    fontWeight:" 400",
    lineHeight: "1.5",
    marginTop: "0",
    marginBottom: "0",
    color:" #006cb7",
    backgroundColor: "transparent",
    display:"block",
    overflow:" hidden",
}

export const NameStyle ={
    color: "#000",
    lineHeight: "1.3125",
    marginTop:" 0",
    marginBottom: "14px",
    fontSize: "1.5rem",
    overflow:" hidden",
}