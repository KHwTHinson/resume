import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";
import Entrance from "./components/contact/Entrance";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [password, setPassword] = useState(1);
  const login = useSelector((state) => state.login.auth);

  if (login) {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Intro />
          <About />
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
