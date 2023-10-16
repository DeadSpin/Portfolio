import AboutUs from './components/home/about-us';
import Contact from './components/home/contact';
import Resume from './components/home/resume';
import Banner from './components/layout/banner';
import Footer from './components/layout/footer';
import NavBar from './components/layout/navbar';
// import Services from './components/services';
import Skills from './components/home/skills';
// import Testimonials from './components/testimonials';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Chat from './components/chat/chat';
import WorkSheet from './components/home/worksheet';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AuthForm from './components/auth/authForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chat"> <Chat /> </Route>
          <Route path="/login"> <AuthForm /> </Route>
          <Route path="/">
            <NavBar />
            <Banner dataText={['Software Developer', 'Freelancer']}/>
            <div className="padding-left-100">
              <ToastContainer />
              <AboutUs />
              <Skills />
              <Resume />
              <WorkSheet />
              {/* <Services /> */}
              {/* <Testimonials /> */}
              <Contact />
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
