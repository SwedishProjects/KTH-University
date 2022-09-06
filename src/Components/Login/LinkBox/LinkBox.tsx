import FormLink from "../FormLink/FormLink";
import {
    Box,
  } from "@mui/material";
function LinkBox(){
    return (
        <>
       <Box sx={{marginTop:"40px"}}>
       <FormLink text="About your "  links=" kth.se-account" />
        <FormLink text="Forgot your "  links=" password?" />
        <FormLink text="Current"  links=" operational status" />

       </Box>


        </>
    )
}


export default LinkBox;