
import images from "../../../../Importer/Importer"
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
                
                <img src={images['Home/KTH_Logo.svg']} alt="To KTH startpage" 
                height="70" width="70"
                />
                </Link>
              </Box>
            
  
          
          
          
                      
          
          
            <Typography sx={siteName} data-cid="1.260060" variant="body2" component="p">
              
              <Link underline="none"   href="https://www.kth.se/en">KTH Royal Institute of Technology</Link>
            </Typography>
            
          
          
          
            
                    </Box>
        </>
    )
}
export default SiteName;