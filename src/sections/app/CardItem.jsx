import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function CardItem({ post }) {
  const { id, author, coverPhoto, title, slug } = post;
  return (
    <Card key={id} sx={{ maxWidth: '100%', borderRadius: '8px', m: 1 }}>
      {author && (
        <Stack direction='row' alignItems='center' spacing={1} pr={2} py={1}>
          <Avatar alt={author.name} src={author.avatar.url} />
          <Typography variant='body3' color='text.secondary' pr={2}>
            {author.name}
          </Typography>
        </Stack>
      )}
      <CardMedia
        component='img'
        height='140'
        image={coverPhoto.url}
        alt={`${title.toString().split(' ', 8).join(' ')}...`}
      />
      <CardContent>
        <Typography variant='body3' color='text.secondary'>
          {title.toString().split(' ', 8).join(' ')}
          {title.toString().split(' ').length >= 8 && '...'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          fullWidth
          variant='outlined'
          sx={{ borderRadius: 10 }}
        >
          <Link to={`/post/${slug}`}>خواندن ادامه</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
