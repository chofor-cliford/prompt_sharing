"use client";

import Profile from "@/components/Profile";
import { deletePrompt, getPromptById } from "@/lib/actions/prompt.actions";
import { PromptCardData } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [posts, setPosts] = useState<PromptCardData[] | undefined>([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      const data = await getPromptById({ userId: session?.user?.id as string });

      setPosts(data);
    };

    fetchPosts();
  }, [session?.user?.id]);

  const handleEdit = (post: PromptCardData) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post: PromptCardData) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");

    if (confirmDelete) {
      try {
        await deletePrompt({ userId: post._id });

        // Update the posts
        const filteredPosts = posts?.filter(
          (p: PromptCardData) => p._id !== post._id
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts as PromptCardData[]}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
