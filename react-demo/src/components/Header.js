import { Link } from "react-router-dom";

const Header = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/#">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link"  to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/about" >About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header;