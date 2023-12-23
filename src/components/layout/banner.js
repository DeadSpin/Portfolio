import React from 'react';
import { Link } from 'react-router-dom';

class Banner extends React.Component {

    static defaultProps = {
        dataText: []
    }

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isDeleting: false,
            loopNum: 0,
            typingSpeed: 150
        }
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props;
        const { isDeleting, loopNum, text, typingSpeed } = this.state;
        const i = loopNum % dataText.length;
        const fullText = dataText[i];

        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
            typingSpeed: isDeleting ? 30 : 150
        });

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 500);
            
        } else if (isDeleting && text === '') {
            this.setState({
                isDeleting: false,
                loopNum: loopNum + 1
            });
        }

        setTimeout(this.handleType, typingSpeed);
    };

    render() {
        return (
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Avinash Gautam</h1>
                    <p>I'm a <span className="typed">{this.state.text}</span><span id="cursor"></span></p>
                    <div className="social-links">
                        <a href="https://twitter.com/Avinashjini18" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/avinashjini/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/dead_spin/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="live:avinashjini" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/avinashgautam-webdeveloper/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;