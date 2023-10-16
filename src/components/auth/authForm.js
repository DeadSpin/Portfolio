import { useRef, useState } from "react";
import * as AuthService from './authService';

const AuthForm = () => {

  const initial_class = {
    signin : 'hide',
    signup : '',
    display : 'display-signup'
  }

  const initialFormValues = {
    name : "",
    email : "",
    password : "",
    confirmPassword : ""
  }
  
  const [toggleClassName, setToggleClassName] = useState(initial_class)
  const [formValue, setFormValue] = useState(initialFormValues)

  const loginEmail = useRef()
  const loginPassword = useRef()

  const togglePage = page => {
    if(page === 'signin') {
      let update = {
        signin : '',
        signup : 'hide',
        display : 'display-signin'
      }
      setToggleClassName(update)
    } else {
      setToggleClassName(initial_class)
    }
  }

  const setFormData = (e, place) => {
    setFormValue((prevState) => {
      prevState[place] = e.target.value
      return {...prevState}
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormValue(initialFormValues)
  }

  const login = (e) => {
    e.preventDefault()
    let loginData = {
      email: loginEmail.current.value,
      password: loginPassword.current.value
    }
    AuthService.login(loginData)
  }

  return (
    <div className={`main ${toggleClassName.display}`}>

        {/* Sign up form */}
        <section className={`signup ${[toggleClassName.signup]}`}>
            <div className="form-container">
                <div className="signup-content">
                    <div className="signup-form section-title">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="name"><i className="bx bx-user"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" value={formValue.name} onChange={(e) => setFormData(e, 'name')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="bx bx-mail-send"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" value={formValue.email} onChange={(e) => setFormData(e, 'email')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="bx bx-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" value={formValue.password} onChange={(e) => setFormData(e, 'password')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="bx bx-lock"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" value={formValue.confirmPassword} onChange={(e) => setFormData(e, 'confirmPassword')}/>
                            </div>
                            {/* <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term term-service"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img src="assets/img/signup-image.jpg" alt="sing up"></img>
                        <span onClick={() => togglePage('signin')} className="signup-image-link">I am already member</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Sign in  Form */}
        <section className={`sign-in ${toggleClassName.signin}`}>
            <div className="form-container">
                <div className="signin-content">
                    <div className="signin-image">
                        <img src="assets/img/signin-image.jpg" alt="sing in"></img>
                        <span onClick={() => togglePage('signup')} className="signup-image-link">Create an account</span>
                    </div>

                    <div className="signin-form section-title">
                        <h2 className="form-title">Log In</h2>
                        <form className="register-form" id="login-form" onSubmit={login}>
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="bx bx-user"></i></label>
                                <input type="text" name="your_name" id="your_name" ref={loginEmail} placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="bx bx-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" ref={loginPassword} placeholder="Password"/>
                            </div>
                            {/* <div className="form-group form-button">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div> */}
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                        {/* <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default AuthForm;