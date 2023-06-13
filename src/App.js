import "./css/App.css";
import Footer from "./repo/Footer";
import Header from "./repo/Header";
import Intro from "./repo/Intro";
import Services from "./repo/Services";
import Contact from "./repo/Contact";
import Skills from "./repo/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Services />
      <Skills />
      <Contact />
      <Footer className="footer" />
    </div>
  );
}

export default App;
