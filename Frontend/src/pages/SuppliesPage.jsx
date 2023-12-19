import Product from "../components/Product";

function SuppliesPage(props,{isAdmin}) {
    
    const { onProductAdd} = props;
    return (
        <div className="content">
        <h1>Supplies page</h1>
        <p>SuppliesPage</p>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        </div>
    );
}

export default SuppliesPage;