import { FC } from "react";
import "./css/blogCard.css";

type GetProps = {
  title: string,
  body: string
}

export const BlogCard: FC<GetProps> = (props:GetProps) => {

  // const { title, body } = props
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.body}</h5>
        </div>
      </div>
    </>
  );
};
