import React from 'react';
import Scrollspy from 'react-scrollspy'

class NavBar extends React.Component {
    render() {
        return (
            <header id="header" className="d-flex flex-column justify-content-center">
                <nav className="nav-menu">
                <Scrollspy className="scrollspy" items={ ['hero', 'about', 'skill', 'resume', 'portfolio', 'services', 'contact'] } currentClassName="active">
                    <li><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#skill"><i className="bx bx-brain"></i> <span>Skill</span></a></li>
                    <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#services"><i className="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </Scrollspy>
                </nav>
            </header>
        )
    }
}

export default NavBar;