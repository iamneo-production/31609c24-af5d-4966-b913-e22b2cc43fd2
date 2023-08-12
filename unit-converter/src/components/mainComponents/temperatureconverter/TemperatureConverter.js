import React, { useState, useEffect } from "react";
import { Row, Col, FormGroup, Label, Input, Button ,Card,Container} from "reactstrap";
import { fetchTemperatureUnits } from "../../../api/Api"; // You need to replace this with the actual API function

const TemperatureConverter = () => {
  const [temperatureUnits, setTemperatureUnits] = useState([]);
  const [value, setValue] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [sourceUnit, setSourceUnit] = useState();
  const [targetUnit, setTargetUnit] = useState();

  useEffect(() => {
    fetchTemperatureUnits() // You need to replace this with the actual API function
      .then((data) => {
        setTemperatureUnits(data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    setConvertedValue();
  }, [value]);

  const convertUnits = () => {
    if (value && sourceUnit && targetUnit) {
      let convertedValueResult = value;

      switch (sourceUnit) {
        case "celsius":
          if (targetUnit === "fahrenheit") {
            convertedValueResult = (value * 9/5) + 32;
          }
          break;

        case "fahrenheit":
          if (targetUnit === "celsius") {
            convertedValueResult = (value - 32) * 5/9;
          }
          break;

        default:
          break;
      }

      setConvertedValue(convertedValueResult);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
    <Card className="centre-card" style={ {background: 'radial-gradient(circle,rgba(238, 174, 202, 1) 0%,rgba(148, 187, 233, 1) 100%)'}}>

    <Row className="container-fluid app-body">
      <h3>Temperature Conversion</h3>
      <Row>
        <Col md={6}>
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
        <Col md={3}>
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
                }
              }}
            >
              <option value="">Select</option>
              {temperatureUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
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
                }
              }}
            >
              <option value="">Select</option>
              {temperatureUnits.map((unit) => (
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
      {convertedValue !== undefined && value !== undefined && (
        <p>
          {value} {sourceUnit} = {convertedValue} {targetUnit}
        </p>
      )}
    </Row>
    </Card>
    </Container>
  );
};

export default TemperatureConverter;
