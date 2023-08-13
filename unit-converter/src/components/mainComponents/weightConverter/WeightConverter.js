import { useState, useEffect } from "react";

import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Container,
} from "reactstrap";

import { fetchWeightUnits } from "../../../api/Api";

const WeightConverter = () => {
  const [weightUnits, setWeightUnits] = useState([]);
  const [value, setValue] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [sourceUnit, setSourceUnit] = useState();
  const [targetUnit, setTargetUnit] = useState();

  useEffect(() => {
    fetchWeightUnits()
      .then((data) => {
        setWeightUnits(data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setConvertedValue();
  }, [value]);

  const convertUnits = () => {
    if (value && sourceUnit && targetUnit) {
      let convertedValueInGram = value;

      switch (sourceUnit) {
        case "milligrams":
          convertedValueInGram *= 0.001;
          break;

        case "kilograms":
          convertedValueInGram *= 1000;
          break;

        case "pounds":
          convertedValueInGram *= 453.592;
          break;

        default:
          break;
      }

      let convertedValueInTargetUnit = convertedValueInGram;

      switch (targetUnit) {
        case "milligrams":
          convertedValueInTargetUnit /= 0.001;
          break;

        case "kilograms":
          convertedValueInTargetUnit /= 1000;
          break;

        case "pounds":
          convertedValueInTargetUnit /= 453.592;
          break;

        default:
          break;
      }

      setConvertedValue(convertedValueInTargetUnit);
    }
  };

  return (
    <Container className="container-fluid app-body card-alignment">
      <Card className="card-background p-5 w-75">
        <Row>
          <h3>Weight Conversion</h3>
          <Row>
            <Col >
              <FormGroup>
                <Label>Enter Source Value in Number</Label>
                <Input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col >
              <FormGroup>
                <Label>Source Unit</Label>
                <Input
                  type="select"
                  value={sourceUnit}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue === "") {
                      setSourceUnit("");
                      setConvertedValue();
                    } else {
                      setSourceUnit(selectedValue);
                      setConvertedValue();
                    }
                  }}
                >
                  <option value="">Select</option>
                  {weightUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col >
              <FormGroup>
                <Label>Target Unit</Label>
                <Input
                  type="select"
                  value={targetUnit}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue === "") {
                      setTargetUnit("");
                      setConvertedValue();
                    } else {
                      setTargetUnit(selectedValue);
                      setConvertedValue();
                    }
                  }}
                >
                  <option value="">Select</option>
                  {weightUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Button onClick={convertUnits} disabled={!targetUnit} outline>
                Convert
              </Button>
            </Col>
          </Row>

          {convertedValue && value && (
            <p>
              {value} {sourceUnit} = {convertedValue} {targetUnit}
            </p>
          )}
        </Row>
      </Card>
    </Container>
  );
};

export default WeightConverter;
