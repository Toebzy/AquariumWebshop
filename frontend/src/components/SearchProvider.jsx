import React, { useState } from 'react';

export const SearchContext = React.createContext();

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;