import {
  Explore, Blogs, MoreNews, Calendar
} from "../../../Components";

import { Grid, Container } from '@mui/material';

function Home() {
  return (
    <>

      <Container
        sx={{
          overflowX:"hidden",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          bgcolor: "#ffffff",

          maxWidth: "100%",

          padding: {xs:"25px",lg:"30px"}
        }}
      >



        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={8} md={12}>
            <Explore />
            <MoreNews />
            <Calendar />
          </Grid>

          <Grid item xs={12} sm={12}  md={12}lg={4}>
            <Blogs />
          </Grid>



        </Grid>
      </Container>
    </>
  );
}

export default Home;
