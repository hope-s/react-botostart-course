import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import * as queries from '../graphql/queries';

export default function User() {
  const [id, setId] = useState(1);
  const [Func, { data, loading, error }] = useLazyQuery(queries.GET_USER);
  console.log('Get User', { data, loading, error });

  return (
    <div>
      <input
        value={id}
        type='text'
        name='input'
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={() => Func({ variables: { id } })}>Get </button>
      {loading && <h3>Loading...</h3>}
      {error && <h1>Error!</h1>}
      {data && (
        <>
          <p>id: {data.user.id}</p>
          <p>username: {data.user.username}</p>
          <p>phone: {data.user.phone}</p>
          <p>email: {data.user.email}</p>
        </>
      )}
    </div>
  );
}
