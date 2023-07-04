import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="container flex items-center mx-auto w-1/2 py-4">
        <div className="container flex-col">
            <div>
                <div>Josh Cowell - Software Developer</div>
            </div>
            <div >
                <p>Hey! I'm Josh, thanks for checking out my website.
                    I'm software developer who's always looking to learn more.
                    Currently focusing on backend applications development and application security.</p>
            </div>
        </div>
        <div className="container flex-col">
        <div className="container">
            <div>
                Recently Updated Projects:
                <ul>
                    <li><Link to="/">Project 1</Link></li>
                    <li><Link to="/">Project 2</Link></li>
                    <li><Link to="/">Project 3</Link></li>
                </ul>
            </div>
        </div>
            <div className="container ">
                <div>
                    Recently Read Books:
                    <ul>
                        <li><Link to="/">Project 1</Link></li>
                        <li><Link to="/">Project 2</Link></li>
                        <li><Link to="/">Project 3</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;
