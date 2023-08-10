import "./Header.css";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="app-header">
        <Navbar className="mb-2" color="secondary" dark>
          <NavbarBrand href="/">Unit - Converter</NavbarBrand>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
