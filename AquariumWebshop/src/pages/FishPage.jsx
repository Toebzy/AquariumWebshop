function FishPage({isAdmin}) {
    return (
        <div class="content">
        <h1>Fish page</h1>
        <p>FishPage</p>

        <li className="product-list_product-item">
            <div className="product-card">
                <div className="product-card_image">
                    <img src="src/assets/images/angelfish.png" alt="fish" width="100" height="100"></img>
                </div>
                <div className="product-card_info">
                    <h2 className="product-card_info_title">Angelfish</h2>
                    <p className="product-card_info_description">(Pterophyllum scalare)</p>
                    <p className="product-card_info_price">7$</p>
                    <button className="product-card_info_button">Add to cart</button>
                </div>
            </div>
        </li>
        <li className="product-list_product-item">
            <div className="product-card">
                <div className="product-card_image">
                    <img src="https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/fish.png" alt="fish" width="100" height="100"></img>
                </div>
                <div className="product-card_info">
                    <h2 className="product-card_info_title">Fish2</h2>
                    <p className="product-card_info_description">Fish2</p>
                    <p className="product-card_info_price">14$</p>
                    <button className="product-card_info_button">Add to cart</button>
                </div>
            </div>
        </li>
        <li className="product-list_product-item">
            <div className="product-card">
                <div className="product-card_image">
                    <img src="https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/fish.png" alt="fish" width="100" height="100"></img>
                </div>
                <div className="product-card_info">
                    <h2 className="product-card_info_title">Fish3</h2>
                    <p className="product-card_info_description">Fish3</p>
                    <p className="product-card_info_price">7$</p>
                    <button className="product-card_info_button">Add to cart</button>
                </div>
            </div>
        </li>

        </div>
    );
}

export default FishPage;