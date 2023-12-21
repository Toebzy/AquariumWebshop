import Product from "../components/Product";

function SuppliesPage({ onProductAdd }) {
  const suppliesData = [
    { name: 'TetraMin Tropical Flakes', text: '28G', price: '$12', image: 'src/assets/images/tetra-tropical-flakes.jpg' },
    { name: 'Tetra Cichlid Sticks', text: '30G', price: '$14', image: 'src/assets/images/tetra-cichlid.jpg' },
    { name: 'Tetra Pro Colour', text: '30G', price: '$16', image: 'src/assets/images/tetra-pro.jpg' },
  ];

  return (
    <div className="content">
      <h1>Sufficient Supplies</h1>
      <p>All the necessities</p>
      {suppliesData.map(supply => (
        <Product
          key={supply.name}
          onProductAdd={onProductAdd}
          productName={supply.name}
          productText={supply.text}
          productPrice={supply.price}
          productImage={supply.image}
        />
      ))}
    </div>
  );
}

export default SuppliesPage;
