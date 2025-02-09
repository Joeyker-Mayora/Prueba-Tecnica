
import PostItem from "../PostItem/PostItem";
import TagFilter from "../TagFilter/TagFilter";
import CommentModal from "../CommentModal/CommentModal";
import usePosts from "../Hooks/usePost"; // Importar el custom hook
import "./PostsList.css";

const PostList = () => {
  const {
    posts,
    filteredPosts,
    selectedPost,
    openModal,
    closeModal,
    filterPosts,
    tags,
  } = usePosts(); // Usar el custom hook

  return (
    <div>
      <TagFilter tags={tags} filterPosts={filterPosts} />

      <div className="post-list">
        {filteredPosts.map((post, index) => (
          <PostItem key={index} post={post} openModal={openModal} />
        ))}
      </div>

      {selectedPost && (
        <CommentModal post={selectedPost} closeModal={closeModal} />
      )}
    </div>
  );
};

export default PostList;
