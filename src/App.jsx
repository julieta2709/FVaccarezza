import { Route, Routes, useLocation } from "react-router-dom";
import Photography from "../src/pages/Photography";
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
        <Routes>
          <Route path={"/"} element={<HomeFull />} />
          <Route path={"/ButtonUp"} element={<Home />} />
          <Route path={"/AboutMe"} element={<AboutMe />} />
          <Route path={"/Work"} element={<Work />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/Photography"} element={<Photography />} />
        </Routes>
      </div>
      <div className="overlay"></div>
    </div>
  );
}
function HomeFull() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return null;
  }

  return (
    <>
      <Home />
      <AboutMe />
      <Work />
      <Contact />
    </>
  );
}
export default App;
