"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { formUrlQuery, removeKeysFromQuery } from "@/utils/utils";

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        const newUrl = formUrlQuery({
          searchParams: searchParams.toString(),
          key: "query",
          value: query,
        });

        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromQuery({
          searchParams: searchParams.toString(),
          keysToRemove: ["query"],
        });

        router.push(newUrl, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [router, searchParams, query]);

  return (
    <div className="flex w-full rounded-[16px] border-2 border-purple-200/20 bg-white px-4 shadow-sm shadow-purple-200/15 md:max-w-96 font-satoshi-medium focus:border-black focus:outline-none focus:ring-0">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />

      <input
        className="search-field"
        placeholder="Search for anything"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
