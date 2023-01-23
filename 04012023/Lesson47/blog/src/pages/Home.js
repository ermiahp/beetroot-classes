import { useEffect } from "react";
import { useFetch } from "../hooks/apiutilities";
import { Link } from "react-router-dom";

function Home() {
  const data = useFetch("https://dummyjson.com/posts?limit=10");
  const posts = data?.posts || [];
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      <h2>My blog post</h2>

      {posts.map((post) => (
        <Link to={`post/${post.id}`}>
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Home;
