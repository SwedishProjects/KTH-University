import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, CardActionArea, CardActions } from '@mui/material';
import Link from '@mui/material/Link';
import {CartTitle,LinkStyle,cartContentStyle} from '../../../../Styles/About/index';



function AboutCart() {
  return (
    <>
 <Grid container spacing={2}>
          <Grid item xs={12} md={6}>

          <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          width="100%"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
        <Typography variant="h2" component="h2" sx={CartTitle}>
        Meet KTH
          </Typography>
          <Typography variant="body2" component="p" sx={cartContentStyle}>
          KTH offers many opportunities throughout the year that invites you to meet us,
           collaborate with us and participate in our activities.
            Everything from music to popular science lectures, 
            academic festivals and scientific conferences can be found here.
          </Typography>
          <Link href="#" underline="hover" sx={LinkStyle}>
        {'See upcoming events at KTH'}
      </Link>
        </CardContent>
      </CardActionArea>
     
    </Card> 



          </Grid>
          <Grid item xs={12} md={6}>

<Card >
<CardActionArea>
<CardMedia
component="img"
height="auto"
width="100%"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography variant="h2" component="h2" sx={CartTitle}>
Discover KTH
</Typography>
<Typography variant="body2" component="p" sx={cartContentStyle}>
Since its founding in 1827, KTH Royal Institute of Technology in Stockholm
 has grown to 
become one of Europe’s leading technical and engineering universities.
</Typography>
<Link href="#" underline="hover" sx={LinkStyle}>
{'Study at KTH'}
</Link>
<Link href="#" underline="hover" sx={LinkStyle}>
{'Research'}
</Link>
<Link href="#" underline="hover" sx={LinkStyle}>
{'Business and Community'}
</Link>
</CardContent>
</CardActionArea>

</Card> 



</Grid>

<Grid item xs={12} md={6}>

<Card >
<CardActionArea>
<CardMedia
component="img"
height="auto"
width="100%"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography variant="h2" component="h2" sx={CartTitle}>
Work at KTH
</Typography>
<Typography variant="body2" component="p" sx={cartContentStyle}>
At KTH you will have the opportunity of bringing life to your ideas and, 
at the same time,
 contributing to tomorrow's society.
</Typography>
<Link href="#" underline="hover" sx={LinkStyle}>
{'KTH - Your future workplace'}
</Link>
<Link href="#" underline="hover" sx={LinkStyle}>
{'Vacancies'}
</Link>

</CardContent>
</CardActionArea>

</Card> 



</Grid>
<Grid item xs={12} md={6}>

<Card >
<CardActionArea>
<CardMedia
component="img"
height="auto"
width="100%"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography variant="h2" component="h2" sx={CartTitle}>
Exchange opportunities
</Typography>
<Typography variant="body2" component="p" sx={cartContentStyle}>
KTH has an active student and staff
 exchange with over 200 prominent technical universities worldwide.
</Typography>
<Link href="#" underline="hover" sx={LinkStyle}>
{'Exchange universities'}
</Link>


</CardContent>
</CardActionArea>

</Card> 



</Grid>
<Grid item xs={12} md={6}>

<Card >
<CardActionArea>
<CardMedia
component="img"
height="auto"
width="100%"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography variant="h2" component="h2" sx={CartTitle}>
KTH's Annual Report 2021
</Typography>
<Typography variant="body2" component="p" sx={cartContentStyle}>
The Annual Report gives you a good oversight 
of KTH operations and virtually all our official statistics for 2021.
</Typography>
<Link href="#" underline="hover" sx={LinkStyle}>
{'Find KTH`s Annual Reports'}
</Link>


</CardContent>
</CardActionArea>

</Card> 



</Grid>
<Grid item xs={12} md={6}>

<Card >
<CardActionArea>
<CardMedia
component="img"
height="auto"
width="100%"
image="/static/images/cards/contemplative-reptile.jpg"
alt="green iguana"
/>
<CardContent>
<Typography variant="body2" component="p" sx={cartContentStyle}>
EU CHARTER & CODE
</Typography>
<Typography variant="h2" component="h2" sx={CartTitle}>
KTH has gained HR Excellence in Research accreditation
</Typography>
<Typography variant="body2" component="p" sx={cartContentStyle}>
KTH has now signed up to the EU Charter & Code following EU Commission approval of our application. 
</Typography>
<Link href="#" underline="hover" sx={LinkStyle}>
{'KTH in line with EU Charter & Code'}
</Link>
<Link href="#" underline="hover" sx={LinkStyle}>
{'About the EU C&C on the Euraxess website'}
</Link>


</CardContent>
</CardActionArea>

</Card> 



</Grid>
          </Grid>
    
    </>
  );
}

export default AboutCart;
