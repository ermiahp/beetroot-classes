import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/apiutilities";

function Post() {
  const params = useParams();
  const id = params.postId > 0 ? params.postId : 1 || 1;
  const post = useFetch(`https://dummyjson.com/posts/${id}`) || {};
  return (
    <div>
      {console.log(JSON.stringify(params))}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <ol>
        {post.tags?.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ol>
    </div>
  );
}

export default Post;
