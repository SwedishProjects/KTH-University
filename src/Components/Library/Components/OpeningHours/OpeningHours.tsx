import { Typography, Link } from '@mui/material'
import { Box } from '@mui/system';
import { SideBarComponentBox, SideBarComponentTitle, SideBarComponentBody, SideBarComponentBodyLetter } from '../../../../Styles/Library';

const OpeningHours = () => {
  return (
      <Box sx={SideBarComponentBox}>
          <Typography  sx={SideBarComponentTitle}>{ "Today's opening hours" }</Typography>
          <Box sx={SideBarComponentBody}>
              <Typography sx={SideBarComponentBodyLetter}>{ "Main Library: 10-19(8-10)" }</Typography>
              <Typography sx={SideBarComponentBodyLetter}>{ "Kista: 10–13 (7–23)" }</Typography>
              <Typography sx={SideBarComponentBodyLetter}>{ "Södertälje: 10–13 (7–15)" }</Typography>
          </Box>
          <Typography><Link underline='hover'>More opening hours</Link></Typography>
    </Box>
  )
}

export default OpeningHours