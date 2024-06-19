"use client";

import Form from "@/components/Form"
import { createNewPrompt } from "@/lib/actions/prompt.actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

const CreatePrompt = () => {

const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const { data: session } = useSession();
  const router = useRouter();

  const createPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Create a new prompt
    const newPrompt = await createNewPrompt({
      userId: session?.user?.id as string,
      prompt: post.prompt,
      tag: post.tag,
    });

    // Redirect to the home page
    if (newPrompt) {
      router.push('/');
    }
    
    setSubmitting(false);

  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}

export default CreatePrompt