import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <Skills />
      <Contact />
      <Footer className="footer"/>
    </div>
  );
}
 
export default App;
