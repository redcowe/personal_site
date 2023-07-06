import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav className="header flex justify-center gap-4 font-bold">
            <Link to="/"className="hover:underline">Home</Link>
            <a href="https://github.com/redcowe/resume/blob/main/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            <Link to="/books"className="hover:underline">Books</Link>
        </nav>
     );
}

export default Navbar;
