"use client"

import PromptCardList from "./PromptCardList";
import { FeedProps, PromptCardData } from "@/types";
import { Search } from "./Search";
import { useState } from "react";

const Feed = ({ postsData: allPosts, page, totalPages, hasSearch }: FeedProps) => {
  const [posts, setPosts] = useState <PromptCardData[] | undefined>(allPosts);

  const handleTagClick = (tag: string) => {
    const tags = tag.split(",").map((t) => t.trim());

    // search for posts with the same tag
    const filteredPosts = allPosts?.filter((post) => {
      const postTags = post.tag.split(",").map((t) => t.trim());
      return tags.some((tag) => postTags.includes(tag));
    });
  
    setPosts(filteredPosts);
  };

  return (
    <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
      {hasSearch && <Search />}

      <PromptCardList
        hasSearch={hasSearch}
        totalPages={totalPages}
        page={page}
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  );
};

export default Feed;
