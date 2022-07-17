import { useMutation } from '@apollo/client';
import * as mutations from '../graphql/mutations';

export default function UpdatePost() {
  const [muteFunc, { data, loading, error }] = useMutation(
    mutations.UPDATE_POST,
    {
      variables: { title: 'title1', body: 'body1' }, //default values
    }
  );

  const submitForm = (e) => {
    e.preventDefault();
    muteFunc({
      variables: {
        title: e.target[0].value,
        body: e.target[1].value,
        id: e.target[2].value,
      },
    });
  };
  console.log('Update Post', { data, loading, error });

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor='title'>title</label>
        <input type='text' name='title' id='title' />
        <br />
        <label htmlFor='body'>body</label>
        <input type='text' name='body' id='body' />
        <br />
        <label htmlFor='id'>id</label>
        <input type='text' name='id' id='id' />

        <button type='submit'>Submit</button>

        {data && (
          <>
            <p style={{ color: 'green' }}>Post Updated!</p>
            <p>id: {data.updatePost.id}</p>
            <p>title: {data.updatePost.title}</p>
            <p>body: {data.updatePost.body}</p>
          </>
        )}
      </form>
    </div>
  );
}
