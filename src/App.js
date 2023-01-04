import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/SASS/main.css";
import LoggedDetailsPage from "./Pages/LoggedDetailsPage";
import ProductInfoPage from "./Pages/ProductInfoPage";
function App() {
  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logged/:id" element={<LoggedDetailsPage />} />
        <Route path="/logged/:id/:productItemTitle" element={<ProductInfoPage />} />
      </Routes>
    </Router>
  
  );
}

export default App;
