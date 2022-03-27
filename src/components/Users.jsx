import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/user/dataAction";

export default function Users() {
  const { users, loading, error } = useSelector((state) => state.usersState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers("https://jsonplaceholder.typicode.com/users"));
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        users?.map((i) => <p key={i.id}>{i.username}</p>)
      )}
    </div>
  );
}
