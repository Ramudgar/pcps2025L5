import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/navbarComponent";
import HomeComponent from "./Components/HomeComponent";
<<<<<<< HEAD
=======
import CounterComponent from "./Components/CounterComponent";
import RecipeComponent from "./Components/RecipeComponent";
import BComponent from "./Components/BComponent";
import ChefsComponent from "./Components/ChefsComponent";
import Weather from "./Components/Weather";
import GetProfile from "./Components/getProfile";
>>>>>>> secb

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
<<<<<<< HEAD
 
=======
          <Route path="/counter" element={<CounterComponent />} />
          <Route path='/recipe' element={<RecipeComponent />} />
          <Route path="/compb" element={<BComponent />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/chefs" element={<ChefsComponent />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/getprofiles" element={<GetProfile/>} />
>>>>>>> secb
        </Routes>
      </Router>
    </>
  );
}

export default App;
<<<<<<< HEAD
 
=======
>>>>>>> secb
