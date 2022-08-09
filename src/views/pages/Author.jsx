import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Container from '@mui/material/Container';
import sanitizeHtml from 'sanitize-html';
import Page from '../../components/Page';
import { GET_AUTHOR } from '../../graphql';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import CardItem from '../../sections/app/CardItem';
import Loader from '../../components/Loader';

function Author() {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_AUTHOR, {
    variables: { where: { slug }, stage: 'PUBLISHED', locales: ['en'] },
  });

  if (loading)
    return (
      <Container>
        <Grid container>
          <Grid mt='30%' xs={12} item display='flex' justifyContent='center'>
            <Loader size={80} />
          </Grid>
        </Grid>
      </Container>
    );

  return (
    <Page title={`جزئیات پروفایل ${data?.author.name || 'نویسنده'}`}>
      <Container>
        {
          <Grid container>
            <Grid
              xs={12}
              item
              mt={10}
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Avatar
                alt={data.author.name}
                src={data?.author.avatar.url}
                sx={{ width: 200, height: 200, borderRadius: 50 }}
              />
              <Typography component='h3' variant='h5' fontWeight={700} mt={4}>
                {data?.author.name}
              </Typography>
              <Typography
                component='h3'
                variant='h5'
                color='text.scondary'
                mt={2}
              >
                {data?.author.field}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                component='section'
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(data?.author.description.html),
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} mt={6}>
              <Typography component='h3' variant='h5' fontWeight={700}>
                مقالات {data?.author.name}
              </Typography>
            </Grid>
            <Grid container my={2}>
              {data?.author.posts.map((post) => (
                <Grid item xs={12} sm={6} md={3} key={post.id}>
                  <CardItem post={post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        }
      </Container>
    </Page>
  );
}

export default Author;
