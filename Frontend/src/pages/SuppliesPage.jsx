import { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
import Product from "../components/Product";
import { searchItems } from '../components/Search';

function SuppliesPage({ onProductAdd }) {
  const { searchQuery } = useContext(SearchContext);

  const suppliesData = [
    { name: 'TetraMin Tropical Flakes', text: '28G', price: '$12', image: 'src/assets/images/tetra-tropical-flakes.jpg' },
    { name: 'Tetra Cichlid Sticks', text: '30G', price: '$14', image: 'src/assets/images/tetra-cichlid.jpg' },
    { name: 'Tetra Pro Colour', text: '30G', price: '$16', image: 'src/assets/images/tetra-pro.jpg' },
  ];

  const filteredSuppliesData = searchItems(suppliesData, searchQuery);

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
        <p>No supplies found for '{searchQuery}'</p>
      )}
    </div>
  );
}

export default SuppliesPage;
