import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/postService";
import Post from "../types/postType";
import { useNavigate } from "react-router";

export default function AddNewPost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onMutate: async (newPost: Post) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData(["posts"]);
      queryClient.setQueryData(["posts"], (posts: Post[]) => {
        return [...(posts || []), newPost];
      });
      return { previousPosts };
    },

    onError: (_err, _newPost, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
      alert("Could not add the new post");
    },
    onSuccess: (data) => {
      alert("post was added successfully");
      navigate(`/posts/${data.id}`);
    },
  });

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      id: string;
      title: string;
      content: string;
    };
    const newPost: Post = data;
    createPostMutation.mutate(newPost);
  }

  return (
    <>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <label htmlFor="id">id</label>
        <input name="id" id="id" type="number" min={0} step={1} /> <br />
        <label htmlFor="title">post title</label>
        <input name="title" id="title" /> <br />
        <label htmlFor="content">post content</label>
        <input name="content" id="conetnt" /> <br />
        <button>add</button>
      </form>
    </>
  );
}
