import { Link } from "react-router";
import { usePosts } from "../hooks/usePosts";
import { deletePost } from "../services/postService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Post from "../types/postType";

export default function GetAllPost() {
  const queryClient = useQueryClient();
  const { data: posts, isLoading, error } = usePosts();

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id: string) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      // Snapshot the previous value
      const previousPosts = queryClient.getQueryData(["posts"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["posts"], (posts: Post[]) => {
        return posts.filter((post) => post.id !== id);
      });

      // Return a context object with the snapshotted value
      return { previousPosts };
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  function handleDelete(id: string) {
    deletePostMutation.mutateAsync(id);
  }

  if (isLoading) return "Loading";
  if (error) return "error";

  return (
    <>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`posts/${post.id}`}>
              <button>See full details</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              delete
            </button>
            <button>Update</button>
          </div>
        );
      })}
    </>
  );
}
