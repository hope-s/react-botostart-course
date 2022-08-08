import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';

import React, { useState } from 'react';
import { CREATE_COMMENT } from '../../../graphql';

function CommnetForm({ slug }) {
  const [variables, setVaribles] = useState({
    name: '',
    email: '',
    text: '',
  });
  const [pressed, setPressed] = useState(false);
  console.log(slug);
  const [sendComment, { data, loading }] = useMutation(CREATE_COMMENT, {
    variables: { data: { ...variables, post: { connect: { slug } } } },
  });

  const sendHandler = () => {
    if (variables.name && variables.email && variables.text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn('لطفا تمام فیلد هارا پر کنید', {
        position: 'top-center',
      });
    }
  };

  if (data && pressed) {
    toast.success('کامنت  شما ارسال شد و منتظر تایید می باشد', {
      position: 'top-center',
    });
    setPressed(false);
  }

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
          ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label='نام کاربری'
          variant='outlined'
          sx={{ width: '100%' }}
          value={variables.name}
          onChange={({ target: { value } }) =>
            setVaribles((prev) => ({
              ...prev,
              name: value,
            }))
          }
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label='ایمیل'
          variant='outlined'
          sx={{ width: '100%' }}
          value={variables.email}
          onChange={({ target: { value } }) =>
            setVaribles((prev) => ({
              ...prev,
              email: value,
            }))
          }
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label='متن'
          variant='outlined'
          sx={{ width: '100%' }}
          value={variables.text}
          onChange={({ target: { value } }) =>
            setVaribles((prev) => ({
              ...prev,
              text: value,
            }))
          }
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant='contained' disabled>
            در حال ارسال کامنت...
          </Button>
        ) : (
          <Button variant='contained' onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommnetForm;
