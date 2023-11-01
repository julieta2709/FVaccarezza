import "../src/styles/App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App-container">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
