import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const user_id = 'user_04dLqidQ8cSA13ROrZxDY';
    const service_id = 'service_xeztdgc';
    const template_id = 'template_d6zhfgh';
    const [userInput, setUserInput] = useState ({
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: []
    });

    const userInputHander = (event) => {
        if(event.target) {
            setUserInput((prevState) => {
                prevState[event.target.name] = event.target.value;
                return {...prevState}
            });
        }
    }

    const handleValidation = () => {
        let fields = userInput;
        let formIsValid = true;
        let errors = [];
    
        //Name
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "* Name required";
        }
        else if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["name"] = "* Only letters allowed";
          }
        }
    
        //Email
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "* Email required";
        }
    
        else if (typeof fields["email"] !== "undefined") {
          let lastAtPos = fields["email"].lastIndexOf("@");
          let lastDotPos = fields["email"].lastIndexOf(".");
    
          if (
            !(
              lastAtPos < lastDotPos &&
              lastAtPos > 0 &&
              fields["email"].indexOf("@@") === -1 &&
              lastDotPos > 2 &&
              fields["email"].length - lastDotPos > 2
            )
          ) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }

        //subject
        if (!fields["subject"]) {
            formIsValid = false;
            errors["subject"] = "* Subject required";
        }
        else if (typeof fields["subject"] !== "undefined") {
            if (!fields["subject"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["subject"] = "* Only letters allowed";
            }
        }

        //Message
        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "* Message required";
        }
        else if (typeof fields["message"] !== "undefined") {
            if (!fields["message"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["message"] = "* Only letters allowed";
            }
        }

        setUserInput((prevState) => {
            prevState['errors'] = {...errors};
            return {...prevState}
        });
        return formIsValid;
      }

    const sendEmail = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            emailjs.sendForm(service_id, template_id, e.target, user_id)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Contact</h2>
                </div>

                <div className="row mt-1">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="icofont-google-map"></i>
                                <h4>Location:</h4>
                                <p>Moti Jheel Colony, Aish Bagh, Lucknow, U.P. 226004</p>
                            </div>

                            <div className="email">
                                <i className="icofont-envelope"></i>
                                <h4>Email:</h4>
                                <p>avinashjini18@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="icofont-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 935-923-2724</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form className="php-email-form" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" 
                                onChange={userInputHander} value={userInput.name} />
                                <div className="validate">{userInput.errors.name}</div>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" 
                                onChange={userInputHander} value={userInput.email} />
                                <div className="validate">{userInput.errors.email}</div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"
                                onChange={userInputHander} value={userInput.subject} />
                                <div className="validate">{userInput.errors.subject}</div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message" 
                                onChange={userInputHander} value={userInput.message} ></textarea>
                                <div className="validate">{userInput.errors.message}</div>
                            </div>

                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact