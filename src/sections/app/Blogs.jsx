import React from 'react';
import { useQuery } from '@apollo/client';
import { Container, Grid } from '@mui/material';
import { GET_ALL_POSTS } from '../../graphql';
import CardItem from './CardItem';
import Loader from '../../components/Loader';

function Blogs() {
  const { data, loading } = useQuery(GET_ALL_POSTS);

  if (loading)
    return (
      <Container>
        <Grid container>
          <Grid mt='10%' xs={12} item display='flex' justifyContent='center'>
            <Loader size={80} />
          </Grid>
        </Grid>
      </Container>
    );

  return (
    <Grid container>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardItem post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
