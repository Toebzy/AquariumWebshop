import Product from "../layouts/Product";

function AquariumsPage(props,{isAdmin}) {
    const { onProductAdd} = props;
    return (
        <div class="content">
        <h1>Aquariums page</h1>
        <p>AquariumsPage</p>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        </div>
    );
}

export default AquariumsPage;