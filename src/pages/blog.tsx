import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BlogCard } from "../components/blogCard";
import { getPostsAsync } from "../redux/thunk";
import { FC } from "react";

export const Blog: FC = () => {
  const dispatch = useDispatch<any>();
  const posts = useSelector((state:any) => state.order.allPosts);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, []);

  return (
    <>
      {posts.length === 0 && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
      {posts.map((item:any) => {
        return (
          <BlogCard
            key={item.id}
            title={item.title} 
            body={item.body}
          />);
      })}
    </>
  );
};
