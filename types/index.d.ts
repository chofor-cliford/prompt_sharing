
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