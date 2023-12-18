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
        productImage='src/assets/images/angelfish.jpg'/>

        <Product
        onProductAdd={onProductAdd}
        productName="Clownfish"
        productText="Amphiprioninae"
        productPrice="$15"
        productImage='src/assets/images/clownfish.jpg'/>

        <Product
        onProductAdd={onProductAdd}
        productName="Royal Gramma"
        productText="Gramma loreto"
        productPrice="$25"
        productImage="src/assets/images/gramma.jpg"/>

        <Product
        onProductAdd={onProductAdd}
        productName="Blue Tang"
        productText="Paracanthurus hepatus"
        productPrice="$30"
        productImage="src/assets/images/bluetang.jpeg"/>

        <Product
        onProductAdd={onProductAdd}
        productName="Garryfish"
        productText="Garryfish"
        productPrice="$4"
        productImage="src/assets/images/garryfish.png"/>
        </div>
    );
}

export default AquariumsPage;