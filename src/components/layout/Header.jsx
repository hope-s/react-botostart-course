import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import PropTypes from 'prop-types';

export default function Header() {
  return (
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant='h5' component='h1' fontWeight={500} flex={1}>
            وبلاگ بوتواستارت
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  obj: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    })
  )
};
