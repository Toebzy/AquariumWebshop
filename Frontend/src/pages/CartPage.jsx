import { useEffect, useState, useContext } from 'react';
import facade from '../util/apiFacade';
import { SearchContext } from "../components/SearchProvider";

function CartPage({ isAdmin }) {
    const { searchQuery } = useContext(SearchContext);
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchCart = () => {
            facade.getCart(
                (cartData) => {
                    setCart(cartData);
                },
                (error) => {
                    // Handle error (e.g., show an error message)
                    console.error("Error fetching cart:", error);
                }
            );
        };

        fetchCart();
    }, []); // The empty dependency array ensures the effect runs only once when the component mounts

    return (
      <div className="content">
        <h1>CartPage</h1>
        <p>This is for Users only.</p>
        {cart && (
          <div>
            <h2>Your Cart:</h2>
            <table className="cart-table">
              <thead>
                <tr className="cart-table_row">
                  <th className="cart-table_header">Product Name</th>
                  <th className="cart-table_header">Product Price</th>
                </tr>
              </thead>
              <tbody className="cart-table_section">
                {cart.cart_items.map((item) => (
                  <tr key={item.id}>
                    <td className="cart-table_products_name">
                      {item.productName}
                    </td>
                    <td className="cart-table_products_price">
                      {item.productPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}

export default CartPage;