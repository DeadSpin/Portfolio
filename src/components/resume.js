import React from 'react'

class Resume extends React.Component {
    render() {
        return (
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>
                            Work collaboratively with clients and in-house agency teams to provide rapid, robust and client-acclaimed front and back-end web development optimizing user experience, brand positioning and related metrics.
                        </p>
                    </div>

                    <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                        <h4>Avinash Gautam</h4>
                        <p><em>Innovative and deadline-driven Full Stack Develper with 3+ years of experience in developing user-centered websites from initial concept to final, polished deliverable.</em></p>
                        <ul>
                            <li>Lucknow, Uttar Pradesh, India</li>
                            <li>(+91) 94529-17911</li>
                            <li>avinashjini18@gmail.com</li>
                        </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor In Technology</h4>
                            <h5>2013 - 2017</h5>
                            <p><em>Govrnment Engineering College, Bijnor, India</em></p>
                            <p><em>Dr. A. P. J. Abdul Kalam Technical University, Lucknow, Uttar Pradesh, India</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Intermediate</h4>
                            <h5>2011 - 2013</h5>
                            <p><em>Pioneer Montessori Inter College, Lucknow, Uttar Pradesh</em></p>
                            <p><em>Uttar Pradesh Board</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Freelancer </h4>
                            <h5>2020 - Present</h5>
                            <p><em>Lucknow, UP, India </em></p>
                            <ul>
                                <li>Developed a design center to play with artwork on FabricJS</li>
                                <li>Developed interface to vitually add design to you product on FabricJS. </li>
                                <li>Created interface for applications to PayPal, an online transaction management system.</li>
                                <li>Developed mutli-Authentication on AWS by AWS Cognito and DynamoDB</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Associate Developer</h4>
                            <h5>2018 - 2020</h5>
                            <p><em>SmartData Enterprises, Mohali</em></p>
                            <ul>
                                <li>Managed up to 3 projects or tasks at a given time while under pressure.</li>
                                <li>Lead in the development, and implementation and production communication materials.</li>
                                <li>Recommended and consulted with clients on the most appropriate feature development.</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                </div>
                </section>
        )
    }
}

export default Resume;