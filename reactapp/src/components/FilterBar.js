
// import React, { useState } from 'react';
// import '../assets/styles/FilterBar.css';

// const FilterBar = ({ onFilterChange }) => {
//   const [filters, setFilters] = useState({
//     starRating: 'Any',
//     reviewCount: 'Any',
//     priceRange: 'Any'
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const newFilters = { ...filters, [name]: value };
//     setFilters(newFilters);
//     onFilterChange(newFilters); // Notify parent component about filter changes
//   };

//   return (
//     <div className="filter-bar">
//       <div className="filter-group">
//         <label>Star Rating:</label>
//         <select name="starRating" value={filters.starRating} onChange={handleInputChange}>
//           <option value="Any">Any</option>
//           <option value="5">5 Stars</option>
//           <option value="4">4 Stars</option>
//           <option value="3">3 Stars</option>
//           <option value="2">2 Stars</option>
//           <option value="1">1 Star</option>
//         </select>
//       </div>
//       <div className="filter-group">
//         <label>Review Count:</label>
//         <select name="reviewCount" value={filters.reviewCount} onChange={handleInputChange}>
//           <option value="Any">Any</option>
//           <option value="50">50+</option>
//           <option value="100">100+</option>
//           <option value="200">200+</option>
//         </select>
//       </div>
//       <div className="filter-group">
//         <label>Price Range:</label>
//         <select name="priceRange" value={filters.priceRange} onChange={handleInputChange}>
//           <option value="Any">Any</option>
//           <option value="$">$</option>
//           <option value="$$">$$</option>
//           <option value="$$$">$$$</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;



import React, { useState } from 'react';
import '../assets/styles/FilterBar.css';

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    starRating: 'Any',
    reviewCount: 'Any',
    priceRange: 'Any'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // Notify parent component about filter changes
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>Star Rating:</label>
        <select name="starRating" value={filters.starRating} onChange={handleInputChange}>
          <option value="Any">Any</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Review Count:</label>
        <select name="reviewCount" value={filters.reviewCount} onChange={handleInputChange}>
          <option value="Any">Any</option>
          <option value="50">50+</option>
          <option value="100">100+</option>
          <option value="200">200+</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Price Range:</label>
        <select name="priceRange" value={filters.priceRange} onChange={handleInputChange}>
          <option value="Any">Any</option>
          <option value="1.5L">1.5L</option>
          <option value="2L">2L</option>
          <option value="2.5L">2.5L</option>
          <option value="3L">3L</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
