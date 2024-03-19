import "./App.css";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
