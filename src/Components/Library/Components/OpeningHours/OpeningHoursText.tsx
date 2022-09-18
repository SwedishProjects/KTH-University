import { Typography, Link ,Box} from '@mui/material'


type props = {
    name: string;
    value: string;
  
  };

function OpeningHoursText( props){
    return(
        <>
        <Typography sx={{display:"flex"}}>
          <Typography variant='subtitle1'>
           {props.name} : 
            </Typography> 
            <Typography variant='subtitle1'>
          {props.value}
            </Typography>
            </Typography>
        </>
    )
}

export default OpeningHoursText;