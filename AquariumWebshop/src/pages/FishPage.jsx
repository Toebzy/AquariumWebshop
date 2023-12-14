import Product from "../layouts/Product";

function FishPage(props,{isAdmin}) {
    const { onProductAdd} = props;
    return (
        <div class="content">
        <h1>Fish page</h1>
        <p>blub blub</p>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        <Product onProductAdd={onProductAdd} productName="Angelfish" productText="(Pterophyllum scalare)" productPrice="$7" productImage='src/assets/images/angelfish.png'/>
        </div>
    );
}

export default FishPage;