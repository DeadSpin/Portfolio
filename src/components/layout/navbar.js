import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

const NavBar = () => {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav className="nav-menu">
            <Scrollspy className="scrollspy" items={ ['hero', 'about', 'skill', 'resume', 'portfolio', 'contact'] } currentClassName="active">
                <li><Link to="#hero"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                <li><Link to="#about"><i className="bx bx-user"></i> <span>About</span></Link></li>
                <li><Link to="#skill"><i className="bx bx-brain"></i> <span>Skill</span></Link></li>
                <li><Link to="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                <li><Link to="#portfolio"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
                <li><Link to="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
                {/* <li><Link to="#services"><i className="bx bx-server"></i> <span>Services</span></Link></li> */}
            </Scrollspy>
            </nav>
        </header>
    )
}

export default NavBar;