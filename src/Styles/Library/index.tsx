
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

export const BtnsBox = {
    margin: { xs: "0 -20", lg: "0 -10px" },
    padding: "15px 0",
    backgroundColor: "white",
}

export const LibraryButtonsContainer = {
    padding: { xs: "0 15px", lg: "0 30px" }
}

export const LiBtn = {
    width: { xs:"95%", md: "48%", lg:"22%"},
    padding: "8px 24px",
    textTransform: 'none',
    fontWeight: '500',
    marginBottom: '1rem'

}

export const BtnBox = {
    width: "100%",
    backgroundColor: "white",
    margin: { xs: "0 -20px", lg: "0 -2px" },
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: {sm: "0", md: "15"}
}
// ============================ LibraryFair ========================

export const LibraryFairBox = {
    margin: { xs: "0 -20", lg: "0 -10px" },
    padding: "15px 0",
    backgroundColor: "white" 
}

export const LibraryFairBoxContainer = {
    padding: { xs: "0 15px", lg: "0 30px" }
}

export const LibraryFairRow = {
    display: "flex",
    flexDirection: {xs: "column", md: "row"},
    justifyContent: "space-between",
    width: "100%"
}

export const LibraryFairIntroduction = {
    width: { xs: "100%", lg: "75%" },
    marginLeft: "1rem"
}

export const LibararyFairSideBar = {
    width: { xs: "100%", lg: "25%" },
    display: "flex",
    flexDirection: "column",
    padding: "10px"
}

// ============================ LibraryFairIntroduction ========================

export const LibraryFairIntroductionBox = {
    display: "flex",
    flexDirection: {xs: "column", md:"row"},
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f6f6f6"
}

export const LibraryFairIntroductionImage = {
    width: { xs: "100%", md: "60%", lg: "35%" }
}

export const LibraryFairIntroductionTextBox = {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "10px 10px",
    marginTop: "15px",
    marginLeft: "2px"
}

export const LibraryFairIntroductionTextBoxTitle = {
    fontSize: { xs: "1.5rem", lg: "2rem" },
    fontFamily: "Open Sans,Arial,Helvetica Neue,helvetica,sans-serif",
    fontWeight: "500",
    marginBottom: "15px",
}

export const LibraryFairIntroductionTextBoxLetter = {
    fontSize: "0.9rem",
    fontFamily: "Open Sans,Arial,Helvetica Neue,helvetica,sans-serif",
    lineHeight: "1.3rem",
    fontWeight: 400,
    marginBottom: "15px"
}

// ============================ OpeningHours & ContactUs ========================

export const SideBarComponentBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
}

export const SideBarComponentTitle = {
    fontSize: "1rem",
    fontWeight: 700,
    marginBottom: "0.7rem",
    marginTop: "1rem"
}

export const SideBarComponentBody = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: "0.7rem"
}

export const SideBarComponentBodyLetter = {
    fontSize: "1rem",
    fontWeight: 200
}


export const teaserBox={
    position: {lg:"absolute",md:"absolute",sm:"relative"},
    height:{xs:"auto",md:"150px",lg:"150px"},
    top: {xs:"0px",sm:"0px",md:"200px",lg:"200px"},
  
 

    bottom:"50px",
    left: {xs:"0",lg:"78px"},
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
    // height:" auto",
    minHeight: "44px",
    cursor: "pointer",
    fontSize: "1rem",
    lineHeight: "1.5",
    marginTop:" 0",
    // display:"block",
    marginBottom: "30px",
    // width:"200px",
    padding:"1rem 2rem",
   width:"300px",
    borderRadius:" 0.25rem",
    border: "1px solid transparent",
    textAlign: "center",
    // verticalAlign: "middle",
    transition:"color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",

}