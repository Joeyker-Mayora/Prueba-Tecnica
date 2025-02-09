import { useState, useEffect } from "react";
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import PostItem from '../PostItem/PostItem';
import TagFilter from  '../TagFilter/TagFilter';
import CommentModal from '../CommentModal/CommentModal';
import './PostsList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map((doc) => doc.data());

      console.log("Datos obtenidos de Firebase:", postsList);
      setPosts(postsList);
      setFilteredPosts(postsList);
    };

    fetchPosts();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  const filterPosts = (tag) => {
    const filtered = posts.filter((post) => post.tags.includes(tag));
    setFilteredPosts(filtered);
  };

  const tags = [...new Set(posts.flatMap((post) => post.tags))];

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
