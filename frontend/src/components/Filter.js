import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState("");

  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" value={category} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="construction">Construction</option>
        <option value="painting">Painting</option>
        <option value="finishing">Finishing</option>
        <option value="doors-windows">Doors and Windows</option>
        <option value="sanitary">Sanitary</option>
        <option value="ceramics">Ceramics</option>
        <option value="heating">Heating</option>
      </select>
    </div>
  );
};

export default Filter;
