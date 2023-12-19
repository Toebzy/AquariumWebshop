import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
import Product from "../components/Product";

function SuppliesPage({ onProductAdd }) {
  const { searchQuery } = useContext(SearchContext);

  // Sample supplies data (replace this with your actual data)
  const suppliesData = [
    { name: 'TetraMin Tropical Flakes', text: '28G', price: '$12', image: 'src/assets/images/tetra-tropical-flakes.jpg' },
    { name: 'Tetra Cichlid Sticks', text: '30G', price: '$14', image: 'src/assets/images/tetra-cichlid.jpg' },
    { name: 'Tetra Pro Colour', text: '30G', price: '$16', image: 'src/assets/images/tetra-pro.jpg' },
    // Add more supplies data as needed
  ];

  // Filter the supplies data based on the searchQuery
  const filteredSuppliesData = suppliesData.filter(supply =>
    supply.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content">
      <h1>Sufficient Supplies</h1>
      <p>All the necessities</p>

      {filteredSuppliesData.map(supply => (
        <Product
          key={supply.name}
          onProductAdd={onProductAdd}
          productName={supply.name}
          productText={supply.text}
          productPrice={supply.price}
          productImage={supply.image}
        />
      ))}

      {filteredSuppliesData.length === 0 && (
        <h1>No supplies found for '{searchQuery}'</h1>
      )}
    </div>
  );
}

export default SuppliesPage;
