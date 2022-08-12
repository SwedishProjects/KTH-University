import { Container } from '@mui/material';
import{ wraperPage} from '../../../Styles/About/index'
import { CoOperation as CoOperationPage } from '../../../Components';
const CoOperation = () => {
    return (
    <>
     <Container sx={{wraperPage}}>
<CoOperationPage />
     </Container>
    </>
    );
  };
  
  export default CoOperation;