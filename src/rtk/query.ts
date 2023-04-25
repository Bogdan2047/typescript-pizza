import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TypePost = {
  id: number,
  title: string,
  body: string,
  userId?: any,
}

export const postsApi = createApi({
  reducerPath: "PostsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getPosts: build.query<TypePost[],number>({
      query: (limit: number = 10) => ({
      url: `/posts`,
      params: {
        _limit: limit
      }
      })
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
