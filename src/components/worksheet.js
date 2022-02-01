const WorkSheet = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Portfolio</h2>
                <p>Till date, I have created more than 5 websites those are telehealth care application and e-commerce. My aim has always been to produce websites that look beautiful and professional, are highly functional.</p>
                </div>

                <div className="row">
                <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">App</li>
                    <li data-filter=".filter-web">Web</li>
                    </ul>
                </div>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/brad2.png" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>Executive Advertising</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                        {/* <a href="assets/img/portfolio/brad2.png" data-gall="portfolioGallery" className="venobox" title="Executive Advertising"><i className="bx bx-plus"></i></a> */}
                        <a href="https://www.executiveadvertising.com/" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Executive Advertising"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/AdobeStock.jpeg" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>Doctoroo</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                        {/* <a href="assets/img/portfolio/AdobeStock.jpeg" data-gall="portfolioGallery" className="venobox" title="Doctoroo"><i className="bx bx-plus"></i></a> */}
                        <a href="https://www.doctoroo.com.au/" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Doctoroo"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/aischc.png" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>AisCHC</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                        {/* <a href="assets/img/portfolio/aischc.png" data-gall="portfolioGallery" className="venobox" title="AisCHC"><i className="bx bx-plus"></i></a> */}
                        <a href="http://aischc.com" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="AisCHC"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web filter-app">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/Photo_5.jpg" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>MyDocRide</h4>
                        <p>Web / App</p>
                        <div className="portfolio-links">
                        {/* <a href="assets/img/portfolio/Photo_5.jpg" data-gall="portfolioGallery" className="venobox" title="MyDocRide"><i className="bx bx-plus"></i></a> */}
                        <a href="https://www.mydocride.com/" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="MyDocRide"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/Post-Acute-Care.png" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>Apotheka</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                        {/* <a href="assets/img/portfolio/Post-Acute-Care.png" data-gall="portfolioGallery" className="venobox" title="Apotheka"><i className="bx bx-plus"></i></a> */}
                        <a href="https://www.apotheka.co/" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Apotheka"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""></img>
                    <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                        </div>
                    </div>
                    </div>
                </div> */}

                </div>

            </div>
            </section>
    )
}

export default WorkSheet;