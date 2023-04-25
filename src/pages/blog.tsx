import { BlogCard } from "../components/blogCard";
import { FC } from "react";
import { useGetPostsQuery } from "../rtk/query";

export const Blog: FC = () => {
  const {data: posts} = useGetPostsQuery(10)

  return (
    <>
      {posts?.length === 0 && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
      {posts?.map((item:any) => {
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
