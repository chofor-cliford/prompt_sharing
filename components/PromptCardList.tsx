"use client";

import { PromptCardListProps } from "@/types";
import PromptCard from "./PromptCard";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { formUrlQuery } from "@/utils/utils";
import { useRouter, useSearchParams } from "next/navigation";

const PromptCardList = ({
  data,
  handleTagClick,
  handleDelete,
  handleEdit,
  page,
  totalPages = 1,
  hasSearch,
}: PromptCardListProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // PAGINATION HANDLER
  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      {data?.length ?? 0 > 0 ? (
        <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
          {data?.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              hasSearch={hasSearch}
              totalPages={totalPages}
              page={page}
              handleTagClick={() => handleTagClick && handleTagClick(post.tag)}
              handleDelete={() => handleDelete && handleDelete(post)}
              handleEdit={() => handleEdit && handleEdit(post)}
            />
          ))}
        </div>
      ) : (
        <div className="flex-center h-60 w-full rounded-[10px] border border-dark-400/10 bg-white/20">
          <p className="font-semibold text-[20px] leading-[140%]">Empty List</p>
        </div>
      )}
      {totalPages > 1 && (
        <Pagination className="mt-10">
          <PaginationContent className="flex w-full">
            <Button
              disabled={Number(page) <= 1}
              className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white "
              onClick={() => onPageChange("prev")}
            >
              <PaginationPrevious className="text-white bg-transparent opacity-80 hover:opacity-100 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:via-orange-600 hover:to-yellow-500" />
            </Button>

            <p className="flex-center p-16-medium w-fit flex-1">
              {page} / {totalPages}
            </p>

            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
              onClick={() => onPageChange("next")}
              disabled={Number(page) >= totalPages}
            >
              <PaginationNext className="text-white bg-transparent opacity-80 hover:opacity-100 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600" />
            </Button>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default PromptCardList;
