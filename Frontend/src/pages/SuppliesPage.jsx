import Product from "../components/Product";

function SuppliesPage(props,{isAdmin}) {
    
    const { onProductAdd} = props;
    return (
        <div className="content">
        <h1>Sufficient  Supplies</h1>
        <p>All the necessities</p>
        <Product onProductAdd={onProductAdd} productName="TetraMin Tropical Flakes" 
        productText="28G" 
        productPrice="$12" 
        productImage='src/assets/images/tetra-tropical-flakes.jpg'/>

        <Product onProductAdd={onProductAdd} productName="Tetra Cichlid Sticks" 
        productText="30G" 
        productPrice="$14" 
        productImage='src/assets/images/tetra-cichlid.jpg'/>

        <Product onProductAdd={onProductAdd} productName="Tetra Pro Colour" 
        productText="30G" 
        productPrice="$16" 
        productImage='src/assets/images/tetra-pro.jpg'/>
        </div>
    );
}

export default SuppliesPage;