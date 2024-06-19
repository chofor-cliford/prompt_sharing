import { User } from "next-auth";

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
  handleTagClick: (tag: string) => void;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}

declare type PromptCardListProps = {
  data: PromptCardData[];
  handleTagClick: (tag: string) => void;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
};