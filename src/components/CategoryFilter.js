import React from "react";

function CategoryFilter({setCategory, categories}) {

  return (
    <div className="categories" >
      <h5>Category filters</h5>
      <h1>
        {categories.map((category) => (
          <button onClick={() => setCategory(category)}>{category}</button>
        ))}
      </h1>
    </div>
  );
}

export default CategoryFilter;
