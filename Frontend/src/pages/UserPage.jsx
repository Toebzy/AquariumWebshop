import React, { useEffect, useState, useContext } from 'react';
import facade from '../util/apiFacade';
import { SearchContext } from "../components/SearchProvider";
function UserPage({isAdmin}) {
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
            <h1>User page</h1>
            <p>This is for Users only.</p>
            {cart && (
                <div>
                    <h2>Your Cart:</h2>
                    {/* Render cart details here */}
                </div>
            )}
        </div>
    );
}

export default UserPage;