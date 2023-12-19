import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
import Product from "../components/Product";

function FishPage({ onProductAdd }) {
  const { searchQuery } = useContext(SearchContext);

  // Sample fish data (replace this with your actual data)
  const fishData = [
    { name: 'Angelfish', text: '(Pterophyllum scalare)', price: '$7', image: 'src/assets/images/angelfish.jpg' },
    { name: 'Clownfish', text: '(Amphiprioninae)', price: '$15', image: 'src/assets/images/clownfish.jpg' },
    { name: 'Royal Gramma', text: '(Gramma loreto)', price: '$25', image: 'src/assets/images/gramma.jpg' },
    { name: 'Blue Tang', text: '(Paracanthurus hepatus)', price: '$30', image: 'src/assets/images/bluetang.jpeg' },
    { name: 'Garryfish', text: '(Garryfish)', price: '$4', image: 'src/assets/images/garryfish.png' },
  ];

  // Filter the fish data based on the searchQuery
  const filteredFishData = fishData.filter(fish =>
    fish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content">
      <h1>Fancy Fish</h1>
      <p>blub blub</p>

      {filteredFishData.map(fish => (
        <Product
          key={fish.name}
          onProductAdd={onProductAdd}
          productName={fish.name}
          productText={fish.text}
          productPrice={fish.price}
          productImage={fish.image}
        />
      ))}

      {filteredFishData.length === 0 && (
        <h1>No fish found for '{searchQuery}'</h1>
      )}
    </div>
  );
}

export default FishPage;
