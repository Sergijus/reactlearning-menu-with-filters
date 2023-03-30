const Filters = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            type="button"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Filters;
