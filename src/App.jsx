import Intro from "./components/intro/Intro";
import IntroPlain from "./components/intro/IntroPlain";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";
import Entrance from "./components/contact/Entrance";
import Cardano from "./components/cardano/Cardano";
import { useSelector } from "react-redux";

function App() {
  const login = useSelector((state) => state.login.auth);

  if (login) {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <IntroPlain />
          {/* <Cardano /> */}
          {/* <About /> */}
          <Skills />
          <Timeline />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Entrance />
      </header>
    </div>
  );
}

export default App;
