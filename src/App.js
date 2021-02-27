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
import './App.css'

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
