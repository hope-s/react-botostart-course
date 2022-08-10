import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid mt='10%' xs={12} item display='flex' justifyContent='center'>
            <Typography variant='h5' color='primary'>
               خطا 404 - متاسفانه صفحه مورد نظر یافت نشد !
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
