import React from 'react';

const FilterDropdown = ({ onFilter }) => {
  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All Statuses</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default FilterDropdown;
