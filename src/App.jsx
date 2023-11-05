import "../src/styles/App.css";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
function App() {
  return (
    <div className="App-container">
      <div>
        <Header />
        <Home />
        <AboutMe />
        <Work />
        <Contact />
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default App;
