import { PromptCardListProps } from "@/types";
import PromptCard from "./PromptCard";

const PromptCardList = ({
  data,
  handleTagClick,
  handleDelete,
  handleEdit,
}: PromptCardListProps) => {
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={() => handleTagClick && handleTagClick(post.tag)}
          handleDelete={() => handleDelete(post)}
          handleEdit={() => handleEdit(post)}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
