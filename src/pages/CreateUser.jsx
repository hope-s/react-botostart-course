import { useMutation } from '@apollo/client';
import * as mutations from '../graphql/mutations';

export default function CreateUser() {
  const [muteFunc, { data, loading, error }] = useMutation(
    mutations.CREATE_USER,
    {
      variables: { name: 'omid', username: 'sh', email: 'omidsh@gmail.com' }, //default values
    }
  );

  const submitForm = (e) => {
    e.preventDefault();
    muteFunc({
      variables: {
        name: e.target[0].value,
        username: e.target[1].value,
        email: e.target[2].value,
        phone: e.target[3].value,
        website: e.target[4].value,
      },
    });
  };
  console.log('Create User', { data, loading, error });

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor='name'>name</label>
        <input type='text' name='name' id='name' />
        <br />
        <label htmlFor='username'>username</label>
        <input type='text' name='body' id='username' />
        <br />
        <label htmlFor='email'>email</label>
        <input type='email' name='email' id='email' />
        <br />
        <label htmlFor='phone'>phone</label>
        <input type='number' name='phone' id='phone' />
        <br />
        <label htmlFor='website'>website</label>
        <input type='text' name='website' id='website' />

        <button type='submit'>Submit</button>

        {data && (
          <>
            <p style={{ color: 'green' }}>User Created successfully!</p>
            <p>name: {data.createUser.name}</p>
            <p>email: {data.createUser.email}</p>
            <p>phone: {data.createUser.phone}</p>
            <p>website: {data.createUser.website}</p>
          </>
        )}
      </form>
    </div>
  );
}
