import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Container, Grid } from '@mui/material';
import { GET_ALL_POSTS } from '../../graphql';
import CardItem from './CardItem';
import Loader from '../../components/Loader';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useLocation, Link } from 'react-router-dom';
import NotFound from '../../views/pages/NotFound';

function Posts() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  let skip = 0;
  const [setPage, { data, loading }] = useLazyQuery(GET_ALL_POSTS, {
    variables: { skip },
  });

  useEffect(() => {
    const func = () => {
      setPage({ variables: { skip } });
    };
    func();
  }, [page]);

  let pagesLenght = [];
  for (let index = 0; index < page; index++) {
    pagesLenght.push(index);
  }
  pagesLenght.forEach((element) => {
    if (element === 0) {
      skip = 0;
    } else {
      skip = skip + 9;
    }
  });

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

    console.log(data)
  if (data?.posts.length === 0) {
    return <NotFound />;
  }

  return (
    <Grid container>
      {data?.posts.map(
        (post, index) =>
          index <= 8 && (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <CardItem post={post} />
            </Grid>
          )
      )}
      <Grid
        item
        xs={12}
        mt={3}
        display='flex'
        justifyContent='center'
        alignItems='end'
      >
        <Pagination
          page={page}
          count={2}
          variant='outlined'
          shape='rounded'
          color='primary'
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default Posts;
