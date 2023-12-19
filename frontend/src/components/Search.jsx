import React, { useContext } from 'react';
import { SearchContext } from './SearchProvider';

const SearchComponent = () => {
  const { handleSearch } = useContext(SearchContext);

  const handleInputChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search_bar"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchComponent;