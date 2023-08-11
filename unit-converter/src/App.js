import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UnitConverter from "./components/mainComponents/unitConverter/UnitConverter";
import LengthConverter from "./components/mainComponents/lengthConverter/LengthConverter";
import WeightConverter from "./components/mainComponents/weightConverter/WeightConverter";

function App() {
  return (
    <>
        <Header />
      <main>
        <UnitConverter />
      </main>
        <Footer/>

      <Router>``
          <Header />

          <Routes>
            <Route path="/" element={<UnitConverter />} />
<<<<<<< HEAD

=======
            <Route path="/convert-weight-units" element={<WeightConverter />} />
>>>>>>> 6948ac99911d2fb0571eb06edf1abccb3c6fe4f1
            <Route path="/convert-length-units" element={<LengthConverter />} />
          </Routes>

          <Footer />
      </Router>

    </>
  );
}

export default App;
