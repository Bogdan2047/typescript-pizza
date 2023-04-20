import axios from "axios";
import { getPosts } from "./actionCreator";

let url = "https://jsonplaceholder.typicode.com/posts";

export const getPostsAsync = () => (dispatch) => {
  axios.get(url).then(({ data }) => dispatch(getPosts(data)));
};
