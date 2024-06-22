import { Session } from "next-auth";
import React from "react";

declare type ProviderProps = {
  children: React.ReactNode;
  session: Session | null | undefined;
};

declare type FormProps = {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: React.Dispatch<
    React.SetStateAction<{
      prompt: string;
      tag: string;
    }>
  >;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
};

// ====== URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string;};
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type FeedProps = {
  postsData: PromptCardData[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
};

declare type CreatePromptProps = {
  prompt: string;
  userId: string;
  tag: string;
};

declare type UserProps = {
  _id: string;
  username: string;
  email: string;
  image: string;
};

declare type PromptCardData = {
  _id: string;
  prompt: string;
  tag: string;
  creator: UserProps;
};

declare type PromptCardProps = {
  post: PromptCardData;
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
  handleTagClick?: (tag: any) => void;
  handleDelete?: (post: any) => void;
  handleEdit?: (post: any) => void;
};

declare type PromptCardListProps = {
  data: PromptCardData[] | undefined;
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
  handleTagClick?: (tag: any) => void;
  handleDelete?: (post: any) => void;
  handleEdit?: (post: any) => void;
};

declare type ProfileProps = {
  name: string;
  desc: string;
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
  data: PromptCardData[];
  handleEdit: (post: any) => void;
  handleDelete: (post: any) => void;
  handleTagClick: (tag: string) => void;
};

declare type GetPromptByIdProps = {
  userId: string;
  limit?: number;
  page: number;
};

declare type GetPromptProps = {
  userId: string;
};

declare type UpdatePromptProps = {
  tag: string;
  prompt: string;
  userId: string;
};

declare type DeletePromptProps = {
  userId: string;
};

declare type DeleteConfirmationProps = {
  handleDelete: () => void;
};

declare type GetAllPromptsProps = {
  limit?: number;
  page: number;
  searchQuery?: string;
};

declare type PostsProps = {
  data: PromptCardData[] | undefined;
  totalPages: number;
};