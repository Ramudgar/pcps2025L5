import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import HomeComponent from "./Components/HomeComponent";
import ChefsComponent from "./Components/ChefsComponent";
import CounterApp from "./Components/CounterApp";
import RecipeCard from "./Components/RecipeComponent";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/chefs" element={<ChefsComponent/>} />
          <Route path="/counter" element={<CounterApp/>} />
          <Route path="/recipes" element={<RecipeCard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
