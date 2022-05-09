import "./App.css";
import { Navbar, AboutMe, GetInTouch, LandingPage, MyWork } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <MyWork />
      <GetInTouch />
      <p>hejsan</p>
    </div>
  );
}

export default App;
