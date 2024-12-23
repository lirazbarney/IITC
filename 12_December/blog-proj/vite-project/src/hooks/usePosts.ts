import { useQuery } from "@tanstack/react-query";
import { getPosts, getSinglePost } from "../services/postService";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
}
export function usePost(postID: string) {
  return useQuery({
    queryKey: ["post", postID],
    queryFn: () => getSinglePost(postID),
  });
}
