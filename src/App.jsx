import "../src/styles/App.css";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App-container">
      <div className="overlay">
      <Header />
      <Home />
      <AboutMe />
      </div>
    </div>
  );
}

export default App;
