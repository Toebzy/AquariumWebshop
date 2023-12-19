import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
import Product from "../components/Product";

function InvertebratesPage({ onProductAdd }) {
  const { searchQuery } = useContext(SearchContext);

  // Sample invertebrate data (replace this with your actual data)
  const invertebrateData = [
    { name: 'Angelfish', text: '(Pterophyllum scalare)', price: '$7', image: 'src/assets/images/angelfish.jpg' },
    { name: 'Clownfish', text: 'Amphiprioninae', price: '$15', image: 'src/assets/images/clownfish.jpg' },
    { name: 'Royal Gramma', text: 'Gramma loreto', price: '$25', image: 'src/assets/images/gramma.jpg' },
    { name: 'Blue Tang', text: 'Paracanthurus hepatus', price: '$30', image: 'src/assets/images/bluetang.jpeg' },
    { name: 'Garryfish', text: 'Garryfish', price: '$4', image: 'src/assets/images/garryfish.png' },
  ];

  // Filter the invertebrate data based on the searchQuery
  const filteredInvertebrateData = invertebrateData.filter(invertebrate =>
    invertebrate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content">
      <h1> Incredible Invertebrates</h1>
      <p>no skellyton havers</p>

      {filteredInvertebrateData.map(invertebrate => (
        <Product
          key={invertebrate.name}
          onProductAdd={onProductAdd}
          productName={invertebrate.name}
          productText={invertebrate.text}
          productPrice={invertebrate.price}
          productImage={invertebrate.image}
        />
      ))}

      {filteredInvertebrateData.length === 0 && (
        <h1>No invertebrates found for '{searchQuery}'</h1>
      )}
    </div>
  );
}

export default InvertebratesPage;
