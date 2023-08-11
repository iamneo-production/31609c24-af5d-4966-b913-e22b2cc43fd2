import "./Header.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="app-header">
        <Navbar className="p-3" color="secondary" dark>
          <Link to="/">
          <NavbarBrand>Unit - Converter</NavbarBrand>
          </Link>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
