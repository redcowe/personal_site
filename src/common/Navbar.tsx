import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/work">Work</Link>
            <Link to="/books">Books</Link>

        </div>
     );
}

export default Navbar;
