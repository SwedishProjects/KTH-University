import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";






export const teaserBox={
    position: {lg:"absolute",md:"relative"},
    height:{xs:"auto",lg:"170px"},
    top: {xs:"0px",sm:"0px",md:"0px",lg:"150px"},
  
 

    bottom:"50px",
    left: {xs:"0",lg:"70px"},
    width: {xs:"100%",md:"100%",sm:"100%",lg:"50%"},
    backgroundColor: "#fff",
    paddingTop: {xs:"20px",sm:"20px",md:"20px",lg:"20px"},
    paddingLeft:  {xs:"0px",sm:"0px",md:"0px",lg:"45px"},
    paddingRight:  {xs:"0px",sm:"0px",md:"0px",lg:"25px"},
    paddingBottom:  {xs:"0px",sm:"0px",md:"0px",lg:"25px"}, 
}


export const teaserBoxHeaderWrap={
    display: "flex",
    flexWrap:" wrap",
    paddingBottom:" 0px",
}
export const teaserBoxHeader={
    flex: "50",
    alignSelf: "flex-end",
    display: "flex",
    justifyContent: "flex-start",
    whiteSpace: "nowrap",
    overflow: "hidden",
    
}
export const teaserBoxHeading={
    fontSize:{xs:"1.5rem !important",sm:"1.5rem !important",md:"1.875rem !important",lg:"1.875rem !important"},
    fontWeight: "600 !important",
    marginBottom:{xs:"14px !important",sm:"14px !important",md:"14px !important",lg:"14px !important"},
    
}
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