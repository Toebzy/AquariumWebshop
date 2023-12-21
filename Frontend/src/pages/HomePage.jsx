import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
import { Link } from 'react-router-dom';
import Slideshow from "../components/Slideshow";
import Product from "../components/Product"; 
import { searchItems, allItems } from '../components/Search';

function HomePage() {
  const { searchQuery } = useContext(SearchContext);

  const filteredItems = allItems.map(itemType => ({
    type: itemType.type,
    items: searchItems(itemType.items, searchQuery)
  }));

  return (
    <div>
      <section className="content">
        <div className="container">
          <div className="row">
            {searchQuery ? (
              // Render search results
              <>
                <h1>Search Results for '{searchQuery}'</h1>
                {filteredItems.map(itemType => (
                  <div key={itemType.type}>
                    {itemType.items.map(item => (
                      <Product
                        key={item.name}
                        productName={item.name}
                        productText={item.text}
                        productPrice={item.price}
                        productImage={item.image}
                      />
                    ))}
                  </div>
                ))}
                {filteredItems.every(itemType => itemType.items.length === 0) && (
                  <p>No results found for '{searchQuery}'</p>
                )}
              </>
            ) : (
              // Render default content when there's no search query
              <>
                <div className="slideshow">
                  <Slideshow />
                </div>
                <div className="row">
                  <h1>MMMMMMMMMMMMMMMMMMMMMMMMHHHHHH..... FISK</h1>
                  <img src="\src\assets\images\fish.jpg" alt="fish" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
