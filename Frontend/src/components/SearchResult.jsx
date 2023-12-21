import { SearchContext } from "../components/SearchProvider";
import { searchItems, allItems } from '../components/Search';
import Product from "../components/Product"; 
import { useState, useEffect, useContext } from 'react';
import { NavLink, Outlet } from "react-router-dom"

function SearchResult(){
    const { searchQuery } = useContext(SearchContext);

    const filteredItems = allItems.map(itemType => ({
        type: itemType.type,
        items: searchItems(itemType.items, searchQuery)
      }));

      return(
        <div className="content">
          <div className="row">
            {searchQuery ? (
              // Render search results
              <>
                <h1>Search Results for '{searchQuery}'</h1>
                <div>
                    {filteredItems.map(itemType => (
                    itemType.items.map(item => (
                        <Product
                        key={item.name}
                        productName={item.name}
                        productText={item.text}
                        productPrice={item.price}
                        productImage={item.image}
                        />
                    ))
                    ))}
                </div>
                {filteredItems.every(itemType => itemType.items.length === 0) && (
                  <p>No results found for '{searchQuery}'</p>
                )}
              </>
            ) : (
              // Render default content when there's no search query
              <>
               <Outlet/> 
              </>
            )}
          </div>
        </div>
      )

}
export default SearchResult;