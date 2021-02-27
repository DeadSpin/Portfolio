import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <h3>Avinash Gautam</h3>
                    <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                    <div className="social-links">
                        <a href="https://twitter.com/Avinashjini18" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/avinashjini/" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/dead_spin/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="live:avinashjini" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/avinashgautam-webdeveloper/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;