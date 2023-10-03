const Resume = () => {

    const date = new Date()
    const experience = 2018
    const exeYear = date.getFullYear() - experience

    return (
        <section id="resume" className="resume">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Work collaboratively with clients and in-house agency teams to provide rapid, robust and client-acclaimed front and back-end web development optimizing user experience, brand positioning and related metrics. </p>
                </div>

                <div className="row">
                <div className="col-lg-6">
                    <h3 className="resume-title">Summary</h3>
                    <div className="resume-item pb-0">
                    <h4>Profile</h4>
                    <p><em>Innovative and deadline-driven Full Stack Develper with {exeYear}+ years of experience in developing user-centered websites from initial concept to final, polished deliverable.</em></p>
                    <ul>
                        <li>Experience in  frameworks Laravel, Codeigniter(Basic), AngularJS, ReactJs(Basic).</li>
                        <li>Good development skills using PHP, JavaScript, MVC, Web-services and databases (MySQL, MongoDB).</li>
                        <li>Having good understanding and experience in Angular, Node js, React(Basic).</li>
                        <li>Expertise in using source code control systems(code versioning system) such as GIT and SVN, JIRA, and Jenkins.</li>
                        <li>Experience in Payment gateways on Stripe, Paypal, Authorized.net, CC Avenue.</li>
                        <li>Experience in developing micro services, using REST APIs.</li>
                        <li>Extensive experience on implementing AJAXfeatures using JavaScript and jQuery.</li>
                        <li>Experience in making CSD (i.e. Client Specifications Documents), FRS (i.e. Functional Requirement Specifications Document) and Project Plans.</li>
                        <li>Excellent analytical, interpersonal and communication skills.</li>
                        <li>Strong practice on IDE like Visual Code, Sublime, Notepad++, Atom and Netbeans.</li>
                        <li>Strong programming experience with sufficient exposure to Windows, Linux, Unix OS.</li>
                        <li>Strong understanding of quality processes and development of highly reliable software compliant with industry standards.</li>
                    </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                        <h4>Bachelor In Technology</h4>
                        <h5>2013 - 2017</h5>
                        <p><em>Dr. A. P. J. Abdul Kalam Technical University</em></p>
                        <p>Lucknow, Uttar Pradesh, India</p>
                    </div>
                    <div className="resume-item">
                        <h4>Intermediate</h4>
                        <h5>2011 - 2013</h5>
                        <p><em>Pioneer Montessori Inter College</em></p>
                        <p>Uttar Pradesh Board</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                        <h4>Assistant Manager </h4>
                        <h5>2022 - Present</h5>
                        <p><em>WNS Global Services, Noida, Uttar Pradesh, India </em></p>
                        <ul>
                            <li>Developed a design center to play with artwork on Canvas using FabricJS</li>
                            <li>Developed interface to vitually add design to you product on FabricJS. </li>
                            <li>Created interface for applications to PayPal, an online transaction management system.</li>
                            <li>Developed mutli-Authentication on AWS by AWS Cognito and DynamoDB</li>
                            <li>Understood and analyzed the client requirement with good communication skills.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Freelancer </h4>
                        <h5>2020 - 2022 (Available)</h5>
                        <p><em>Lucknow, Uttar Pradesh, India </em></p>
                        <ul>
                            <li>Developed a design center to play with artwork on Canvas using FabricJS</li>
                            <li>Developed interface to vitually add design to you product on FabricJS. </li>
                            <li>Created interface for applications to PayPal, an online transaction management system.</li>
                            <li>Developed mutli-Authentication on AWS by AWS Cognito and DynamoDB</li>
                            <li>Understood and analyzed the client requirement with good communication skills.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Senior Software Developer</h4>
                        <h5>2019 - 2020</h5>
                        <p><em>SmartData Enterprises, Mohali</em></p>
                        <ul>
                            <li>Managed up to more than 5 projects at a given time while under pressure.</li>
                            <li>Lead in the development and implementation and production communication materials.</li>
                            <li>Followed Agile based environment with daily scrum calls and coordination with the team.</li>
                            <li>Recommended and consulted with clients on the most appropriate feature development.</li>
                            <li>Enhanced user experience by designing new web features and also single page applications using Angular.js</li>
                            <li>Created MySQL stored procedures and triggers for database.</li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Associate Developer</h4>
                        <h5>2018 - 2019</h5>
                        <p><em>SmartData Enterprises, Nagpur</em></p>
                        <ul>
                            <li>Project analysis and understanding the project's requirements.</li>
                            <li>Task based designing and implementing functionalities.</li>
                            <li>Involved in the implementation of open-source web applications.</li>
                            <li>Integrate Stripe payment gateways with basic and custom stripe account for multiple transactions.</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
    )
}

export default Resume;