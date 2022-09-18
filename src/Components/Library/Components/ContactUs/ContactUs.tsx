import { Typography, Link } from '@mui/material'
import { Box } from '@mui/system';
import {
  SideBarComponentTitle,
  SideBarComponentBox,
  SideBarComponentBody,
  SideBarComponentBodyLetter
}
  from '../../../../Styles/Library';

const ContactUs = () => {
  return (
      <Box sx={ SideBarComponentBox }>
          <Typography sx={SideBarComponentTitle}>{ "Contact us" }</Typography>
          <Box sx={SideBarComponentBody}>
              <Typography sx={SideBarComponentBodyLetter}>{ "Phone: +46 8 790 70 88 (12–14)" }</Typography>
              <Typography sx={SideBarComponentBodyLetter}>{ "Chat: 9–16" }</Typography>
              <Typography sx={SideBarComponentBodyLetter}>E-mail: <Link underline='hover'> biblioteket@kth.se</Link></Typography>
          </Box>
          <Typography> <Link underline='hover'> Contact form  </Link></Typography>
    </Box>
  )
}

export default ContactUs