import "./UnitConverter.css";
import Cards from "../../constants/card/Cards";
import { unitTypes } from "../../constants/ConstantJson";
import { Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

const UnitConverter = () => {
  const navigate = useNavigate();
  const handleCardClick = (route) => {
    navigate(route);
  };
  return (
    <Container className="container-fluid app-body">
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
    </Container>
  );
};




export default UnitConverter;