import React from 'react';
import Page from '../../components/Page';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Authors from '../../sections/app/Authors';
import Blogs from '../../sections/app/Blogs';

export default function Home() {
  return (
    <Page title='خانه | وبلاگ'>
      <Container maxWidth='lg'>
        <Grid container mt={10} spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant='h5' component='h3' mb={2} fontWeight={700}>
              نویسنده ها
            </Typography>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant='h5' component='h3' mb={2} fontWeight={700}>
              مقالات
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
