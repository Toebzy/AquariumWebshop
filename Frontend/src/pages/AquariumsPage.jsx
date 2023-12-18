import Product from "../components/Product";

function AquariumsPage(props,{isAdmin}) {
    const { onProductAdd} = props;
    return (
        <div class="content">
        <h1>Aquariums page</h1>
        <p>AquariumsPage</p>

        <Product onProductAdd={onProductAdd} productName="Angelfish" 
        productText="(Pterophyllum scalare)" 
        productPrice="$7" 
        productImage='src/assets/images/angelfish.png'/>

        <Product
        onProductAdd={onProductAdd}
        productName="Clownfish"
        productText="Amphiprioninae"
        productPrice="$15"
        productImage='src/assets/images/clownfish.jpg'/>


        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        </div>
    );
}

export default AquariumsPage;