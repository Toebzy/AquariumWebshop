import Product from "../components/Product";

function TanksPage(props,{isAdmin}) {
    const { onProductAdd} = props;
    return (
        <div className="content">
        <h1>Tranquil Tanks</h1>
        <p>Let the fishies feel at home</p>

        <Product onProductAdd={onProductAdd} productName="Fish Box Moon" 
        productText="19L" 
        productPrice="$75" 
        productImage='src/assets/images/tank19l.jpg'/>

        <Product
        onProductAdd={onProductAdd}
        productName="Aquatropic LED 60"
        productText="60L"
        productPrice="$145"
        productImage='src/assets/images/tank60l.jpg'/>

        <Product
        onProductAdd={onProductAdd}
        productName="Superfish Tropical Medium"
        productText="62L"
        productPrice="$109.99"
        productImage="src/assets/images/tank62l.jpg"/>

        <Product
        onProductAdd={onProductAdd}
        productName="Fishotronic L 160"
        productText="160L"
        productPrice="$199.99"
        productImage="src/assets/images/tank160l.jpg"/>

        <Product
        onProductAdd={onProductAdd}
        productName="Tetra XL Aquarium"
        productText="200L"
        productPrice="$215"
        productImage="src/assets/images/tank200l.jpg"/>
        </div>
    );
}

export default TanksPage;