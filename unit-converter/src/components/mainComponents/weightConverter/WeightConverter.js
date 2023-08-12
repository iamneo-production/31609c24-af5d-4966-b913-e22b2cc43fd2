import { useState, useEffect } from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { fetchWeightUnits } from "../../../api/Api";


const WeightConverter = () => {

  const [weightUnits, setWeightUnits] = useState([]);
  const [value, setValue] = useState();
  const [convertedValue, SetConvertedValue] = useState();
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
    SetConvertedValue();
  }, [value]);

  const convertUnits = () => {
    if (value && sourceUnit && targetUnit) {
      let convertedValueInGram = value;

      switch (sourceUnit) {
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
        case "kilograms":
          convertedValueInTargetUnit /= 1000;
          break;
        case "pounds":
          convertedValueInTargetUnit /= 453.592;
          break;
        default:
          break;
      }

      SetConvertedValue(convertedValueInTargetUnit);
    }
  };

  return (
    <Row className="container-fluid app-body">
      <h3>Weight Conversion</h3>
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
                  SetConvertedValue();
                } else {
                  setSourceUnit(selectedValue);
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
                  SetConvertedValue();
                } else {
                  setTargetUnit(selectedValue);
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
  );
};

export default WeightConverter;
