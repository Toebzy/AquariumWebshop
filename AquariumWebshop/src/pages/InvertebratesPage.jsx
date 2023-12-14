import Product from "../layouts/Product";

function InvertebratesPage(props) {
    const { onProductAdd} = props;
    return (
        <div class="content">
        <h1>Invertebrates page</h1>
        <p>InvertebratesPage</p>
        <Product onProductAdd={onProductAdd} productName="Angelfish" />
        <Product onProductAdd={onProductAdd} productName="Angelfish 2" />
        <Product onProductAdd={onProductAdd} productName="Angelfish 2" />
        <Product onProductAdd={onProductAdd} productName="Angelfish 2" />
        <Product onProductAdd={onProductAdd} productName="Angelfish 2" />
        <Product onProductAdd={onProductAdd} productName="Angelfish 2" />
        <Product onProductAdd={onProductAdd} productName="Angelfish 2" />
        
        </div>
    );
}

export default InvertebratesPage;