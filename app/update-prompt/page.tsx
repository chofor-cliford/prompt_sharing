"use client";

import Form from "@/components/Form";
import { useToast } from "@/components/ui/use-toast";
import { getPrompt, updatePrompt } from "@/lib/actions/prompt.actions";
import { LoaderPinwheelIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const EditPrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const { toast } = useToast();

  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const data = await getPrompt({ userId: promptId!});

      setPost(data);
    };

    promptId && getPromptDetails();
  }, [promptId]);
  console.log(post);
  const router = useRouter();

  const updatedPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) {
      return;
    }

    // Update the prompt
    const updatedPrompt = await updatePrompt({
      prompt: post.prompt,
      tag: post.tag,
      userId: promptId,
    });

    // Redirect to the home page
    if (updatedPrompt) {
      router.push("/");
    }

    // Show toast
    toast({
      description: "Your prompt has been successfully edited.",
    });

    setSubmitting(false);
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatedPrompt}
    />
  );
};

const EditPromptWithSuspense = () => (
  <Suspense fallback={<LoaderPinwheelIcon />}>
    <EditPrompt />
  </Suspense>
);

export default EditPromptWithSuspense;


