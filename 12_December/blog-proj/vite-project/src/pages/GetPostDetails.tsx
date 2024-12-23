import { useParams } from "react-router";
import { usePost } from "../hooks/usePosts";

export default function GetPostDetails() {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePost(id!);

  if (isLoading) return "loading";
  if (error) return "error";

  return (
    <>
      <h1>post title: {post?.title}</h1>
      <span>post content: {post?.content}</span>
    </>
  );
}
