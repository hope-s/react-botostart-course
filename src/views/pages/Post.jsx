import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import sanitizeHtml from 'sanitize-html';
import Page from '../../components/Page';
import Container from '@mui/material/Container';
import { GET_POST } from '../../graphql';
import { Avatar, Grid, IconButton, Typography } from '@mui/material';
import Loader from '../../components/Loader';
import Arrow from '@mui/icons-material/ArrowBackRounded';
import { Box } from '@mui/system';
import CommnetForm from '../../sections/app/comment/CommnetForm';
import Comments from '../../sections/app/comment/Comments';

function Post() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_POST, {
    variables: { stage: 'PUBLISHED', where: { slug } },
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
    <Page title='صفحه پست'>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid
            item
            xs={12}
            mt={12}
            display='flex'
            justifyContent='space-between'
          >
            <Typography color='primary' fontWeight={700} variant='h5'>
              {data?.post.title}
            </Typography>
            <IconButton
              sx={{ width: 50, height: 50 }}
              onClick={() => navigate(-1)}
            > 
              <Arrow />
            </IconButton>
          </Grid>
          <Grid item xs={12} mt={5} display='flex' alignItems='center'>
            <img
              src={data.post.coverPhoto.url}
              alt={data.post.title}
              width='100%'
              style={{ borderRadius: 15 }}
            />
          </Grid>
          <Grid item xs={12} mt={6} display='flex' alignItems='center'>
            <Link
              to={`/author/${data?.post.author.slug}`}
              className='unset-link'
            >
              <Avatar
                src={data?.post.author.avatar.url}
                alt={data.post.author.name}
                sx={{ width: 60, height: 60, mr: 2 }}
              />
            </Link>
            <Box component='div'>
              <Typography variant='h6' fontWeight={700}>
                {data.post.author.name}
              </Typography>
              <Typography variant='p'>{data.post.author.field}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} mt={4}>
            <Box
              component='section'
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.post.content.html),
              }}
              sx={{ textAlign: 'justify' }}
            ></Box>
          </Grid>
          <Grid item xs={12}>
            <CommnetForm slug={slug} />
          </Grid>
          {data.post.comments[0] && (
            <Grid item xs={12}>
              <Comments comments={data.post.comments} />
            </Grid>
          )}
        </Grid>
      </Container>
    </Page>
  );
}

export default Post;
