"use client";

import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";
import { getPrompts } from "@/lib/actions/prompt.actions";
import { PromptCardData } from "@/types";

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState<PromptCardData[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
    const data = await getPrompts();

    setPosts(data);
    }

    fetchPosts();
  }, [])

  return (
    <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
      <form
        action=""
        className="relative w-full flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search for anything"
          value={searchText}
          onChange={handleSearchChange}
          className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-5 pr-12 text-sm shadow-lg font-satoshi-medium focus:border-black focus:outline-none focus:ring-0 peer"
          required
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}      
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    </section>
  );
};

export default Feed;
