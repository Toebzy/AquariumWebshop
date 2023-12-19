import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
import Slideshow from "../components/Slideshow";

function HomePage(){
    const { searchQuery } = useContext(SearchContext);
    return (
        <div>
            <section className="content">
                <div className="container">
                                
            <div className="slideshow">
                <Slideshow />
            </div>

                    <div className="row">
                        
                        <h1>MMMMMMMMMMMMMMMMMMMMMMMMHHHHHH..... FISK</h1>
                        <img src="\src\assets\images\fish.jpg" alt="fish" />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default HomePage;