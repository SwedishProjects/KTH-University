import { Typography, Link, Grid ,Box} from "@mui/material";


interface PhDLinkProps {
 
  links: string;
}
function PhDLink({  links }: PhDLinkProps) {
  return (
   
   <>
     
        <Link
          sx={{
            fontSize: "1rem",
            fontHeight: "400",
            color: "#006cb7",
            textDecoration: "none",
            backgroundColor: "transparent",
            marginBottom: "14px",
            lineHeight: "1.5",
            display:"block",
          }}
        
          href="#"
         
          underline="hover"
       
         
          variant="subtitle1"
        >
           {links}
        </Link>
    
      </>
  
   
  );
}

export default PhDLink;
