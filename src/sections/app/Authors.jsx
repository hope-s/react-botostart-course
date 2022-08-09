import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ALL_AUTHORS } from '../../graphql';
import { Container, Grid } from '@mui/material';
import Loader from '../../components/Loader';

function Authors() {
  const { data, loading } = useQuery(GET_ALL_AUTHORS);

  if (loading)
    return (
      <Container>
        <Grid container>
          <Grid mt='10%' item display='flex' justifyContent='center'>
            <Loader size={80} />
          </Grid>
        </Grid>
      </Container>
    );

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 300,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: '10px',
        p: 0,
      }}
    >
      {data.authors.map((author, index) => (
        <React.Fragment key={author.slug}>
          {index !== 0 && <Divider variant='middle' component='p' />}
          <Link className='unset-link' to={`/author/${author.slug}`}>
            <ListItem alignItems='flex-start'>
              <ListItemButton sx={{ p: 0.5, borderRadius: '5px' }}>
                <ListItemAvatar>
                  <Avatar alt={author?.name} src={author?.avatar?.url} />
                </ListItemAvatar>
                <ListItemText
                  style={{ textAlign: 'right' }}
                  primary={author.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component='span'
                        variant='body2'
                        color='text.primary'
                      >
                        {author.field}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </React.Fragment>
      ))}
    </List>
  );
}

export default Authors;
