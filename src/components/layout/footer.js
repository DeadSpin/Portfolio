import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <h3>Avinash Gautam</h3>
                <p>Start your own chapter in this exciting app development journey and put your creativity on the development highway.</p>
                <div className="social-links">
                    <a href="https://twitter.com/Avinashjini18" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.facebook.com/avinashjini/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/dead_spin/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="live:avinashjini" target="_blank" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="https://www.linkedin.com/in/avinashgautam-webdeveloper/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                <div className="copyright">
                    &copy; Copyright <strong><span>Avinash Gautam</span></strong>. All Rights Reserved
                </div>
            </div>

            <a href="assets/docs/Avinash_Gautam_Resume.pdf" data-tip data-for='downloadresume' className="download-resume" download><i className="bx bxs-cloud-download"></i></a>
            <ReactTooltip id='downloadresume' type='light' effect='solid' backgroundColor='#0563bb' textColor='#FFF'>
                <span>Download Resume</span>
            </ReactTooltip>
            <Link data-tip data-for='backtotop' href="#" className="back-to-top"><i className="bx bx-up-arrow-alt"></i></Link>
            <ReactTooltip id='backtotop' type='light' effect='solid' backgroundColor='#0563bb' textColor='#FFF'>
                <span>Back to top</span>
            </ReactTooltip>
        </footer>
    )
}

export default Footer;