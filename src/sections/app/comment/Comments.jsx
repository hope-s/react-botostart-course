import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Comments({ comments }) {
  console.log(comments);
  return (
    <Grid
      container
      sx={{
        boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component='p' variant='h6' fontWeight={700} color='primary'>
          کامنت ها
        </Typography>
        {comments.map((comment) => (
          <Grid
            item
            xs={12}
            sx={{
              my: 2,
              p: 2,
              border: '1px solid #009688',
              borderRadius: '10px',
            }}
            key={comment.id}
          >
            <Box component='div' display='flex' alignItems='center' mb={2}>
              <Avatar>{comment.name[0]}</Avatar>
              <Typography
                component='span'
                variant='p'
                fontWeight={700}
                mr={1}
                color='primary'
              >
                {comment.name}
              </Typography>
            </Box>
            <Box component='div'>
              <Typography component='p' variant='p'>
                {comment.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Comments;
