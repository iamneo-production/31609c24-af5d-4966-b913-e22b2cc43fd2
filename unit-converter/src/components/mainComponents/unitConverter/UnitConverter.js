import "./UnitConverter.css";
import Cards from "../../constants/card/Cards";
import { unitTypes } from "../../constants/ConstantJson";
import { Row } from "reactstrap";

const UnitConverter = () => {
  return (
    <div className="app-body">
      <h1>Welcome to Unit - Converter</h1>
        <br/>
      <div className="unitCards">
        {unitTypes.map((item) => (
          <div key={item.id}>
            <Cards />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnitConverter;
