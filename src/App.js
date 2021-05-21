import AboutUs from './components/about-us';
import Contact from './components/contact';
import Banner from './components/layout/banner';
import Footer from './components/layout/footer';
import NavBar from './components/layout/navbar';
import Resume from './components/resume';
import Services from './components/services';
import Skills from './components/skills';
import Testimonials from './components/testimonials';
import WorkSheet from './components/worksheet';
import Chat from './components/chat/chat';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <NavBar />
            <Banner dataText={['Developer', 'Freelancer']}/>
            <div className="padding-left-100">
              <AboutUs />
              <Skills />
              <Resume />
              <WorkSheet />
              <Services />
              <Testimonials />
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
