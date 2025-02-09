import PropTypes from "prop-types";
import "./PostItem.css";

const PostItem = ({ post, openModal }) => {
  return (
    <div className="post-item">
      <img src={post.image} alt={post.title} className="post-image" />
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <div className="post-user">
          <img src={post.user.avatar} alt={post.user.name} className="user-avatar" />
          <span className="user-name">{post.user.name}</span>
        </div>
        <div className="post-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        <button className="comment-btn" onClick={(event) => { 
          event.stopPropagation(); 
          openModal(post); 
        }}>
           Ver comentarios
        </button>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PostItem;
