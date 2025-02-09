// hooks/usePosts.js
import { useState, useEffect } from "react";
import axios from "axios";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/posts");
        const postsList = response.data;
        setPosts(postsList);
        setFilteredPosts(postsList);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  const filterPosts = (tag) => {
    if (tag === null) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
    }
  };

  const tags = [...new Set(posts.flatMap((post) => post.tags))];

  return {
    posts,
    filteredPosts,
    selectedPost,
    openModal,
    closeModal,
    filterPosts,
    tags,
  };
};

export default usePosts;
