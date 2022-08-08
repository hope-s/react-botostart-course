import React from 'react';
import { HashLoader } from 'react-spinners';

function Loader({ size = 50, loading = true }) {
  return (
    <HashLoader
      cssOverride={{
        margin: 'auto',
      }}
      color='#009688'
      size={size}
      loading={loading}
    />
  );
}

export default Loader;
