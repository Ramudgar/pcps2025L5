import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/navbarComponent";
import HomeComponent from "./Components/HomeComponent";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
 
        </Routes>
      </Router>
    </>
  );
}

export default App;
 