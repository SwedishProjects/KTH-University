import { Library as LibraryPage} from '../../../Components'
import { Box } from "@mui/material";
import { Container } from '@mui/material';
import{ wraperPage} from '../../../Styles/About/index'
const Library = () => {
    return (
    
      <Container sx={{wraperPage}}>
      <LibraryPage />
    </Container>
   
    );
  };
  
  export default Library;