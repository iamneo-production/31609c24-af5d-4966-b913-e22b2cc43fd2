import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UnitConverter from "./components/mainComponents/unitConverter/UnitConverter";
import LengthConverter from "./components/mainComponents/lengthConverter/LengthConverter";

function App() {
  return (
    <>
      <Router>
          <Header />

          <Routes>
            <Route path="/" element={<UnitConverter />} />

            <Route path="/convert-length-units" element={<LengthConverter />} />
          </Routes>

          <Footer />
      </Router>
    </>
  );
}

export default App;
