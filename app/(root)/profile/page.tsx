"use client";

import React, { Suspense, useEffect, useState } from "react";
import Profile from "@/components/Profile";
import { useToast } from "@/components/ui/use-toast";
import { deletePrompt, getPromptById } from "@/lib/actions/prompt.actions";
import { PostsProps, PromptCardData } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { LoaderPinwheelIcon } from "lucide-react";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = 6;

  const [posts, setPosts] = useState<PostsProps>({
    data: [],
    totalPages: 1,
  });
  const { data: session } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      const postData = await getPromptById({
        userId: session?.user?.id as string,
        page,
        limit,
      });

      setPosts({
        ...posts,
        data: postData.data,
        totalPages: postData.totalPages,
      });
    };

    fetchPosts();
  }, [session?.user?.id, page, posts]);

  const handleEdit = (post: PromptCardData) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleTagClick = (tag: string) => {
    const tags = tag.split(",").map((t) => t.trim());

    // search for posts with the same tag
    const filteredPosts = posts?.data?.filter((post) => {
      const postTags = post.tag.split(",").map((t) => t.trim());
      return tags.some((tag) => postTags.includes(tag));
    });

    setPosts({ ...posts, data: filteredPosts });
  };

  const handleDelete = async (post: PromptCardData) => {
    // Confirm delete
    try {
      await deletePrompt({ userId: post._id });

      // Update the posts
      const filteredPosts = posts?.data?.filter(
        (p: PromptCardData) => p._id !== post._id
      );
      setPosts({ ...posts, data: filteredPosts });

      // Show toast
      toast({
        description: "Your prompt has been successfully deleted.",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts?.data as PromptCardData[]}
      hasSearch={true}
      totalPages={posts?.totalPages}
      page={page}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      handleTagClick={handleTagClick}
    />
  );
};

const UserProfileWithSuspense = () => (
  <Suspense fallback={<LoaderPinwheelIcon />}>
    <UserProfile />
  </Suspense>
);

export default UserProfileWithSuspense;
