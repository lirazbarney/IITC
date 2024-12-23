import axios from "axios";
import Post from "../types/postType";

const BASE_URL = "http://localhost:3000/";

export const getPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get(`${BASE_URL}posts`);
  return data;
}; //✅

export const getSinglePost = async (id: string): Promise<Post> => {
  const { data } = await axios.get(`${BASE_URL}posts/${id}`);
  return data;
}; //✅

export const createPost = async (newPost: Post): Promise<Post> => {
  const { data } = await axios.post(`${BASE_URL}posts`, newPost);
  return data;
}; //✅

export const updatePost = async (
  id: string,
  updates: Partial<Post>
): Promise<Post> => {
  const { data } = await axios.put(`${BASE_URL}posts/${id}`, updates);
  return data;
};

export const deletePost = async (id: string): Promise<Post> => {
  const { data } = await axios.delete(`${BASE_URL}posts/${id}`);
  return data;
}; //✅
