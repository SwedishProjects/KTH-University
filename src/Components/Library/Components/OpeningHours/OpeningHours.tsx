import { Typography} from '@mui/material'
import {OpeningHoursTitle , }from "../../../../Styles/Library"
import OpeningHoursText from './OpeningHoursText'
import CardLink from 'src/Components/Blogs/Components/CardLink/CardLink'
const OpeningHours = () => {
  return (
    <>
      <Typography sx={OpeningHoursTitle}>
             Today's opening hours
            </Typography>
<OpeningHoursText name="Main Library" value="Closed" />
<OpeningHoursText name="Kista" value="Closed" />
<OpeningHoursText name="Södertälje" value="Closed" />

          <CardLink links={["More opening hours"]} />

            <Typography sx={OpeningHoursTitle}>
            Contact us
            </Typography>
            <OpeningHoursText name="Phone" value=" +46 8 790 70 88 (10–12)" />

            <OpeningHoursText name="Chat" value="Closed for summer" />

            <Typography sx={{display:"flex"}}>
          <Typography variant='subtitle1'>
          E-mail : 
            </Typography> 
            <Typography sx={{paddingLeft:"3px" , marginBottom:"-4px"}}>
          <CardLink links={["biblioteket@kth.se"]} />
          </Typography>
            </Typography>
          <CardLink links={["​​​​​​​Contact form"]} />
            
    </>  
  )
}

export default OpeningHours