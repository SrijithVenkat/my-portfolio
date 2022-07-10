import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import "./components/Skills.css"

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact />
      <SocialLinks/>
    </div>
  );
}

export default App;
