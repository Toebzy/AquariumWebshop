import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";

function ErrorPage() {
    const { searchQuery } = useContext(SearchContext);
    return (
        <div class="ErrorPage" >
            <h1>Page not found!</h1>
            <h1>Go to the <Link to="/"class="linkText">Homepage</Link></h1>
            <img class="ErrorImage" src="\src\assets\images\fish.jpg" alt="fish" />
            
        </div>                      
    );
}

export default ErrorPage;