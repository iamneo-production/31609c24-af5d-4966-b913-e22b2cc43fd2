import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UnitConverter from "./components/mainComponents/unitConverter/UnitConverter";
import LengthConverter from "./components/mainComponents/lengthConverter/LengthConverter";
import WeightConverter from "./components/mainComponents/weightConverter/WeightConverter";
import TemperatureConverter from "./components/mainComponents/temperatureconverter/TemperatureConverter";
import SpeedConverter from "./components/mainComponents/speedConverter/SpeedConverter";
import TimeConverter from "./components/mainComponents/timeConverter/TimeConverter";
function App() {
  return (
    <>
  
      <Router>
          <Header />

          <Routes>
            <Route path="/" element={<UnitConverter />} />
            <Route path="/convert-weight-units" element={<WeightConverter />} />
            <Route path="/convert-length-units" element={<LengthConverter />} />
            <Route path="/convert-temperature-units" element={<TemperatureConverter />} />
            <Route path="/convert-speed-units" element={<SpeedConverter />} />
            <Route path="/convert-time-units" element={<TimeConverter />} />
          </Routes>

          <Footer />
      </Router>

    </>
  );
}

export default App;
