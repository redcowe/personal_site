import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="header flex justify-center gap-4 font-bold">
            <Link to="/"className="hover:underline">Home</Link>
            <Link to="/contact"className="hover:underline">Contact</Link>
            <Link to="/work"className="hover:underline">Work</Link>
            <Link to="/books"className="hover:underline">Books</Link>
        </nav>
     );
}

export default Navbar;
