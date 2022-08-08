import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import { useForm, Controller } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';

import { CREATE_COMMENT } from '../../../graphql';

function CommnetForm({ slug }) {
  const [pressed, setPressed] = useState(false);
  const [sendComment, { data, loading }] = useMutation(CREATE_COMMENT);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  if (isSubmitting) {
    if (errors.name || errors.email || errors.text) {
      toast.warn('لطفا خطاها را اصلاح کنید', {
        position: 'top-right',
      });
    }
  }

  const onSubmit = (data) => {
    sendComment({
      variables: { data: { ...data, post: { connect: { slug } } } },
    });
    setPressed(true);
  };

  if (data && pressed) {
    toast.success('نظر  شما ارسال شد و منتظر تایید می باشد', {
      position: 'top-right',
    });
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
      <Grid item md={6} m={2}>
        <Typography component='p' variant='h6' fontWeight={700} color='primary'>
          نظر خود را ثبت کنید
        </Typography>
      </Grid>

      <Box component='form' width='100%' onSubmit={handleSubmit(onSubmit)}>
        <Grid item md={6} m={2}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true, minLength: 2 }}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.name}
                size='small'
                label='نام'
                variant='standard'
                sx={{ width: '100%' }}
              />
            )}
          />
        </Grid>

        <Grid item md={6} m={2}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                size='small'
                label='ایمیل'
                variant='standard'
                sx={{ width: '100%' }}
              />
            )}
          />
        </Grid>

        <Grid item md={6} m={2}>
          <Controller
            name='text'
            control={control}
            rules={{ required: true, minLength: 10 }}
            defaultValue=''
            render={({ field }) => (
              <TextField
                size='small'
                label='متن'
                variant='standard'
                sx={{ width: '100%' }}
                multiline
                minRows={4}
                {...field}
                error={!!errors.text}
              />
            )}
          />
        </Grid>

        <Grid item m={2} display='flex' alignItems='center'>
          <Button type='submit' variant='contained'>
            ارسال
          </Button>
          {loading && (
            <BeatLoader
              cssOverride={{ marginRight: 10 }}
              color='#1976d2'
              size={15}
            />
          )}
        </Grid>
      </Box>
      <ToastContainer />
    </Grid>
  );
}

export default CommnetForm;
