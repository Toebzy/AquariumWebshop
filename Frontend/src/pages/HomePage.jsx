import Slideshow from "../components/Slideshow";

function HomePage(){
    return (
        <div>
            <section className="frontpage">
                <div>               
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