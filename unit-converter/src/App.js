import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UnitConverter from "./components/mainComponents/unitConverter/UnitConverter";

function App() {
  return (
    <>
    
        <Header />
    

      <main>
        <UnitConverter />
      </main>

    
        <Footer/>
      
    </>
  );
}

export default App;
