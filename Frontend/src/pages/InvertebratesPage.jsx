import Product from "../components/Product";

function InvertebratesPage(props) {
    const { onProductAdd} = props;
    return (
        <div class="content">
        <h1>Invertebrates page</h1>
        <p>no skellyton havers</p>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>

        </div>
    );
}

export default InvertebratesPage;