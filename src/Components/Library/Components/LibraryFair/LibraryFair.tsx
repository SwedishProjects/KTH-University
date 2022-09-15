import { Box, Container } from '@mui/system';
import LibraryFairIntroduction from '../LibraryFairIntroduction/LibraryFairIntroduction';
import OpeningHours from '../OpeningHours/OpeningHours';
import ContactUs from '../ContactUs/ContactUs';
import {
    LibraryFairBox,
    LibraryFairBoxContainer,
    LibraryFairRow,
    LibraryFairIntroduction as FairContainer,
    LibararyFairSideBar
}
    from '../../../../Styles/Library';

const LibraryFair = () => {
    return (
        <Box sx={ LibraryFairBox }>
            <Container sx={ LibraryFairBoxContainer }>
                <Box sx={ LibraryFairRow }>
                    <Box sx={ FairContainer }>
                        <LibraryFairIntroduction />
                    </Box>
                    <Box sx={ LibararyFairSideBar }>
                        <OpeningHours />
                        <ContactUs />
                    </Box>
                </Box>
            </Container>
        </Box>

    )
}

export default LibraryFair