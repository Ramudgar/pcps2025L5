import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/navbarComponent";
import HomeComponent from "./Components/HomeComponent";
import CounterComponent from "./Components/CounterComponent";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/counter" element={<CounterComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
