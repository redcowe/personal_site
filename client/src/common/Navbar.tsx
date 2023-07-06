import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="header flex justify-center gap-4 font-bold">
            <Link to="/"className="hover:underline">Home</Link>
            <Link to="/resume"className="hover:underline">Resume</Link>
            <Link to="/books"className="hover:underline">Books</Link>
        </nav>
     );
}

export default Navbar;
