import "./Card.css";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const Cards = () => {
  return (
    <>
      <Card className="card">
        <CardBody>
          <CardTitle>Length/Height</CardTitle>
          <CardText>
            Generally,length is defined as distance between 2 points ,it is
            measure in m,cm,km,mm,nm,feet,inch
          </CardText>
          <Button>Convert length</Button>
        </CardBody>
      </Card>
    </>
  );
};
export default Cards;
