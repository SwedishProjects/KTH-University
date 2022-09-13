import {Divider,Button} from '@mui/material';


const LibraryButton = () => {
    return (
    <>
      <Button variant="contained">Contained</Button>
      <Divider variant="inset" component="li" />
    </>
    );
  };
  
  export default LibraryButton;