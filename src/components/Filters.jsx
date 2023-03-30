const Filters = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button className="btn" type="button" key={item.index}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Filters;
