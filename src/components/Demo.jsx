import React from "react";
import { fetchPosts } from "../redux/actions";
import { connect, useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

class PostsComponent extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const data = this.props.data;
    const {
      userData: { posts, isloading, error },
    } = data;

    console.log(data.userData);

    return (
      <div className="app-container">
        {isloading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          posts.map((i) => <p key={i.id}>{i.title}</p>)
        )}
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  data: (state) => state,
});

const mapDispatchToProps = { fetchPosts };
export default connect(structuredSelector, mapDispatchToProps)(PostsComponent);



// *********************************
// function componenet =>
// *********************************



// export default function Demo() {
//   const { posts, loading, error } = useSelector((state) => state.userData);
//   const dispatch = useDispatch();

//   console.table(posts)

//   React.useEffect(() => {
//     dispatch(fetchPosts());
//   }, []);

//   return (
//     <div className="app-container">
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : error ? (
//         <h1>{error}</h1>
//       ) : (
//         posts.map((i) => <p key={i.id}>{i.title}</p>)
//       )}
//     </div>
//   );
// }
