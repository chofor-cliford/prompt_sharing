import { FormProps } from "@/types";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }: FormProps) => {
  return (
    <section className="w-full max-w-full flex-start md:flex-center flex-col">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        {type}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Post
        </span>
      </h1>

      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-md text-left">
        {type} and share exceptional prompts and unleash your creativity with an
        AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-custom-inset backdrop-blur p-5"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>

          <textarea
            name="prompt"
            id="prompt"
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
            required
          />
        </label>
        <label htmlFor="tag">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Tags&nbsp;
            <span className="font-normal">
              (#AIWriting, #AIGenerated, #AIDreams)
            </span>
          </span>

          <input
            name="tag"
            id="tag"
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tags, #tags, #tags..."
            className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-5">
          <Link href="/" className="text-gray-500 text-sm font-bold">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm font-bold bg-primary-orange rounded-full text-white transition-all hover:bg-orange-600"
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
