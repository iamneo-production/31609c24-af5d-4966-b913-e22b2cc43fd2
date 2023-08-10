import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UnitConverter from "./components/mainComponents/unitConverter/UnitConverter";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <UnitConverter />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
