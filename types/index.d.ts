import { Session } from 'next-auth';
import React from 'react';

declare type ProviderProps = {
  children: React.ReactNode;
  session: Session | null | undefined;
};

declare type FormProps ={
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: React.Dispatch<React.SetStateAction<{
    prompt: string;
    tag: string;
  }>>;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

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
  handleTagClick: (tag: any) => void;
  handleDelete: (post: any) => void;
  handleEdit: (post: any) => void;
}

declare type PromptCardListProps = {
  data: PromptCardData[];
  handleTagClick?: (tag: any) => void | undefined;
  handleDelete: (post: any) => void;
  handleEdit: (post: any) => void;
};

declare type ProfileProps={
  name: string;
  desc: string;
  data: PromptCardData[];
  handleEdit: (post: any) => void;
  handleDelete: (post: any) => void;
}

declare type GetPromptByIdProps = {
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