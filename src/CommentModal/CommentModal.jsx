import PropTypes from "prop-types";
import "./CommentModal.css";

const CommentModal = ({ post, closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={closeModal} className="close-btn">X</button>
        <h3>Comentarios</h3>
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.user}:</strong>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


CommentModal.propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          user: PropTypes.string.isRequired,
          comment: PropTypes.string.isRequired,
        })
      ),
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
  };

export default CommentModal;
