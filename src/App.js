import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Works from './Components/ProjectWorks/Works';
import Contact from './Components/Contact/Contacts';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { themeContext } from './Context';


function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      {/* <Experience></Experience> */}
      <Projects></Projects>
      {/* <Works></Works> */}
      <Contact></Contact>
      <Footer />
    </div>
  );
}

export default App;
