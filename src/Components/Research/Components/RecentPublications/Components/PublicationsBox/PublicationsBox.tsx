import { Link,Grid,Typography } from "@mui/material";



interface Info{
    id:string;
    author:string;
    links : string;
    title:string;
    date :string;
}





function PublicationsBox (Info){
    return(
        <>
        <Grid container spacing={2} sx={{ marginBottom: "20px",}}>
   
   <Grid item xs={12} sm={1} md={1} lg={1}>
   <Typography
  variant="body2"
  sx={{
    lineHeight: "2rem",
  }}
>
  [{Info.id}]
</Typography>
    </Grid>
    <Grid item xs={12} sm={11} md={11} lg={11}>
    <Typography
  variant="body2"
  sx={{
    lineHeight: "2rem",
    fontSize:"1rem",
  }}
>
 {Info.author} 
 <Link
          sx={{
            fontSize: "1rem",
            fontHeight: "400",
            color: "#006cb7",
            textDecoration: "none",
            backgroundColor: "transparent",
           
            lineHeight: "1.5",
            
        
          }}
          href="#"
          underline="hover"
          variant="subtitle1"
        >
           {Info.links}
        </Link>
{Info.title}
{Info.date}
</Typography>
    </Grid>
  
  

  
  </Grid>
        </>
    );
}


export default PublicationsBox;