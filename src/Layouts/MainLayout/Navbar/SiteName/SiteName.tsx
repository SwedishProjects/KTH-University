
import logoImg from "../../../../Assets/Images/KTH_Logo.svg"
import {
    Box,
    Divider,
    FormControl,
    InputBase,
    MenuItem,
    Link,
    Typography,
    Button ,
    Grid
  } from "@mui/material";


  import {
    siteName ,
    headerContainerTop ,
    figure ,
    figureimg ,
  }
  from '../../../../Styles/SiteName'

function SiteName (){
    return (
        <>

<Box sx={headerContainerTop}>
            


<Box sx={figure}>
<Link href="https://www.kth.se/en" underline="none"   className="customerReview"   sx={figureimg}>
                
                <img src={logoImg} alt="To KTH startpage" 
                height="70" width="70"
                />
                </Link>
              </Box>
            
  
          
          
          
                      
          
          
            <Typography data-cid="1.260060" variant="body2" component="p">
              
              <Link underline="hover" sx={siteName}  href="https://www.kth.se/en">KTH Royal Institute of Technology</Link>
            </Typography>
            
          
          
          
            
                    </Box>
        </>
    )
}
export default SiteName;