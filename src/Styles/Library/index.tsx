
export const MainBox = {
    display: { sm: "flex", md: "block" },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: { sm: "relative", md: "relative" },
    backgroundColor: "white"
}

export const SearchBox = {
    width: { sm: "100%", md: "55%" },
    position: { sm: "relative", md: "absolute" },
    bottom: { sm: 0, md: 50 },
    left: { sm: -35, md: 0 },
    backgroundColor: "white",
    padding: "20px 25px 25px 35px",
    display: "flex",
    flexDirection: "column"
}

export const SearchBoxTitle = {
    fontSize: { xs:"1rem", sm:"1.5rem", md:"1.5rem", lg:"2rem"},
    fontWeight: "600",
    paddingBottom: "10px"
}

export const InputBox = {

    border: "2px solid #d6d6d6",
    backgroundColor: "#f6f6f6",
    padding: "6px 10px",
    outline: "none",
    position: "relative",
    height: 45,
    borderRadius: 2
}

export const SearchIcon = {
    fontSize: "40px",
    color: "#2877b2",
    zIndex: 10,
    position: "absolute",
    right: 5,
    top: 10,
    float: "right"
}

export const SearchMore = {
    textAlign: "right",
    paddingTop: "10px",
    color: "#006cb7"
}

export const SearchMoreLink = {
    fontSize: { xs: "", lg: "large" }
}

// ============================ LibraryInfo ========================


export const InfoBox = {
    margin: { xs: "0 -20px", lg: "0 -10px" }
}

export const LibraryInfoContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        bgcolor: "#ffffff",
        maxWidth: "100%",
        padding: { xs: "0 25px", lg: "0 30px" }
}

export const LibraryInfoBox = {
    backgroundColor: "#fcf8e3",
    padding: "30px 10px 30px 20px"
}

export const InfoIcon = {
    color: "#fab919",
    dispaly: "inline-block",
    float: "left",
    marginRight: "6px",
    fontSize: "xx-large"
}
// ============================ LibraryButton & LibraryButtons ========================



// ============================ OpeningHours & ContactUs ========================



export const teaserBox={
    position: {lg:"absolute",md:"absolute",sm:"relative"},
    height:{xs:"auto",md:"150px",lg:"150px"},
    top: {xs:"0px",sm:"0px",md:"350px",lg:"400px"},
  
 

    bottom:"50px",
    left: {xs:"0",md:"25px",lg:"100px"},
    width: {xs:"100%",md:"50%",sm:"100%",lg:"50%"},
    backgroundColor: "#fff",
    paddingTop: {xs:"20px",sm:"20px",md:"20px",lg:"20px"},
    paddingLeft:  {xs:"0px",sm:"0px",md:"36px",lg:"36px"},
    paddingRight:  {xs:"0px",sm:"0px",md:"25px",lg:"25px"},
    paddingBottom:  {xs:"0px",sm:"0px",md:"40px",lg:"25px"}, 
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



export const CoOperationText={
    // margin:" 0",
    maxWidth: "100%",
    fontFamily: "'Open Sans',Arial,'Helvetica Neue',helvetica,sans-serif",
    fontSize: "1.5rem",
    fontWeight: "500",
    color:"#000",
    lineHeight:" 1.5",

    margin: "0 0 14px",
}


export const RoundedIconStyle={
 color: "#fab919",
 dispaly: "inline-block",
  float: "left", 
  marginRight: "6px", 
  fontSize: "xx-large",
 }
//  ---------------------------Buttons .......................

export const ButtonStyle={
    color: "#fff",
    backgroundColor: "#007fae",
    borderColor:"#007fae",
    fontWeight:" 600",
   
    cursor: "pointer",
    fontSize: "0.75rem",
    lineHeight: "1.5",
    marginTop:" 0",
 
    marginBottom: "30px",
   
    padding:"1rem 2rem",
   width:"100%",
    borderRadius:" 0.25rem",
    border: "1px solid transparent",
    boxSizing:"border-box",
    textAlign: "center",
    "&:hover" :{
        backgroundColor: "#007fba",
        // opacity:"0.9"
       
      },

    

}

export const OpeningHoursTitle={
    fontFamily: "'Open Sans',Arial,'Helvetica Neue',helvetica,sans-serif",
    fontSize: "1.25rem",
    fontWeight: "600",
    color:" #000",
    lineHeight: "1.375",
    marginTop: "0",
    marginBottom: "14px",
}