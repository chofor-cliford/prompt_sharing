"use client";

import { PromptCardProps } from "@/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const PromptCard = ({
  post,
  handleTagClick,
  handleEdit,
  handleDelete,
}: PromptCardProps) => {
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const { data: session } = useSession();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);

    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
            onClick={() => router?.push("/profile")}
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div
          className="w-7 h-7 rounded-full bg-white/10 shadow-custom-inset backdrop-blur flex justify-center items-center cursor-pointer"
          onClick={handleCopy}
        >
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick" : "copy"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-stoshit text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        onClick={handleTagClick}
      >
        {post.tag}
      </p>

      {session?.user?.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex items-center justify-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
