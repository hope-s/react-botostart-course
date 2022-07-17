import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import * as mutations from '../graphql/mutations';

export default function DeletePost() {
  const [Func, { data, loading, error }] = useMutation(mutations.DELETE_POST);
  const [id, setId] = useState(2);

  console.log('DeletePost', { data, loading, error });

  const submitForm = (e) => {
    e.preventDefault();
    Func({ variables: { id } });
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type='number'
          value={id}
          onChange={({ target: { value } }) => setId(value)}
        />
        <button>Submit</button>
      </form>
      {data && <p style={{ color: 'green' }}>User Deleted!</p>}
    </div>
  );
}
