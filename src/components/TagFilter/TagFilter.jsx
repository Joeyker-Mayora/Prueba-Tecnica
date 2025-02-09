import PropTypes from "prop-types";
import "./TagFilter.css";

const TagFilter = ({ tags, filterPosts }) => {
  return (
    <div className="tag-filter">
      <button onClick={() => filterPosts(null)} className="filter-btn all-btn">
        Todos
      </button>
      {tags.map((tag, index) => (
        <button
          key={index}
          onClick={() => filterPosts(tag)}
          className="filter-btn"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterPosts: PropTypes.func.isRequired,
};

export default TagFilter;
