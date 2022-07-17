import CreateUser from './pages/CreateUser';
import DeletePost from './pages/DeletePost';
import UpdatePost from './pages/UpdatePost';
import User from './pages/User';

export default function App() {
  return (
    <div className='App'>
      <h4>Get User:</h4>
      <User />
      <br />
      <br />

      <h4>Create User:</h4>
      <CreateUser />
      <br />
      <br />

      <h4>Update Post:</h4>
      <UpdatePost />
      <br />
      <br />

      <h4>Delete Post:</h4>
      <DeletePost />
      <br />
      <br />
    </div>
  );
}
