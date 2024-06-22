import { ProfileProps } from "@/types";
import PromptCard from "./PromptCard";
import PromptCardList from "./PromptCardList";

const Profile = ({
  name,
  desc,
  data,
  hasSearch,
  totalPages,
  page,
  handleEdit,
  handleDelete,
  handleTagClick,
}: ProfileProps) => {

  return (
    <section className="w-full">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        {name}{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Profile
        </span>
      </h1>

      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left">
        {desc}
      </p>

      <PromptCardList
        hasSearch={hasSearch}
        totalPages={totalPages}
        page={page}
        data={data}
        handleTagClick={handleTagClick}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  );
};

export default Profile;
