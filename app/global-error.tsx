"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-black flex flex-col items-center justify-center">
        <h2
          className="text-white mt-5 text-5xl font-extrabold leading-[1.15]
sm:text-6xl"
        >
          Something went wrong!
        </h2>
        <Button
          variant="destructive"
          className=" text-white"
          onClick={() => reset()}
        >
          Try again
        </Button>
      </body>
    </html>
  );
}
