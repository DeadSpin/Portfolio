const AboutUs = () => {

    const date = new Date()
    const experience = 2018
    const birth = 1996
    const exeYear = date.getFullYear() - experience
    const age = date.getFullYear() - birth

    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>About</h2>
                <p>I am a Web development expert with more than {exeYear} years of experience in setup and customization and I am capable of assisting my clients with entire development cycle starting from requirements gathering, application GUI, application front-end and back-end development. Execellent reputation for resolving problems, improving customer satisfaction and driving overall operational improvements. </p>
                </div>

                <div className="row">
                <div className="col-lg-4">
                    <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Full Stack PHP Developer (Laravel and Codeignator) with Angular and React</h3>
                    <p className="font-italic">
                    Organized and goal oriented with extensive experience in System Analysis, project management and strong customer focus and analytical problem solver.
                    </p>
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> December 29, 1995</li>
                        {/* <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li> */}
                        <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +91 9359232724</li>
                        <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Lucknow, Uttar Pradesh, India</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                        <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> {age}</li>
                        {/* <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li> */}
                        <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> avinashjini18@gmail.com</li>
                        <li><i className="icofont-rounded-right"></i> <strong>Full Time / Freelance:</strong> Available</li>
                        </ul>
                    </div>
                    </div>
                    <p>
                        I have been engaged in development of some Enterprise Level applications where I have served clients of different Market Vertical. I have worked on projects that are complex applications.
                        Till date, I have created more than 5 websites or products those are telehealth care application, e-commerce and pharma competitive portal. My aim has always been to produce websites that look beautiful and professional, are highly functional.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;