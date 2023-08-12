import "./UnitConverter.css";
import Cards from "../../constants/card/Cards";
import { unitTypes } from "../../constants/ConstantJson";
import { Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

const UnitConverter = () => {
  const navigate = useNavigate();
  const handleCardClick = (route) => {
    navigate(route);
  };
  return (
    <Row className="container-fluid app-body">
      <Row className="mb-4">
        <h3>Welcome to Unit - Converter</h3>
      </Row>
      <Row>
        <div className="unitCards">
          {unitTypes.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.to)}
              role="button"
            >
              <Cards
                title={item.title}
                text={item.description}
                buttonText={item.button}
              />
            </div>
          ))}
        </div>
      </Row>
    </Row>
  );
};




export default UnitConverter;