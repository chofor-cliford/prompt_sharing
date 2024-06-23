import Feed from "@/components/Feed";
import { getAllPrompts } from "@/lib/actions/prompt.actions";
import { SearchParamProps } from "@/types";
import { auth } from "@/utils/auth";

const Home = async ({ searchParams }: SearchParamProps) => {
  const session = await auth();

  if (!session?.user) return null;

  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const prompts = await getAllPrompts({ page, searchQuery });
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Discover & Share&nbsp;
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">
          AI-Powered Prompt
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
        PromptShare is an innovative, open-source AI tool for creative minds.
        Explore, design, and share prompts that ignite creativity and inspire
        others.
      </p>

      <Feed
        hasSearch={true}
        postsData={prompts?.data}
        totalPages={prompts?.totalPages}
        page={page}
      />
    </section>
  );
};

export default Home;
