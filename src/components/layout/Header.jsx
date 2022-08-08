import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant='h5' component='h1' fontWeight={500} flex={1}>
            <Link className='unset-link' to='/'>
              وبلاگ Hope
            </Link>
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
