import React, { useState, useEffect } from "react";
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
import { fetchTimeUnits } from "../../../api/Api";
import "./TimeConverter.css";

const TimeConverter = () => {
  const [timeUnits, setTimeUnits] = useState([]);
  const [value, setValue] = useState();
  const [convertedValue, setConvertedValue] = useState();
  const [sourceUnit, setSourceUnit] = useState();
  const [targetUnit, setTargetUnit] = useState();

  useEffect(() => {
    fetchTimeUnits()
      .then((data) => {
        setTimeUnits(data);
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
        case "seconds":
          if (targetUnit === "minutes") {
            convertedValueResult = value / 60;
          }
          if (targetUnit === "hours") {
            convertedValueResult = value / 3600;
          }
          break;

        case "minutes":
          if (targetUnit === "seconds") {
            convertedValueResult = value * 60;
          }
          if (targetUnit === "hours") {
            convertedValueResult = value / 60;
          }
          break;

        case "hours":
          if (targetUnit === "minutes") {
            convertedValueResult = value * 60;
          }

          if (targetUnit === "seconds") {
            convertedValueResult = value * 3600;
          }
          break;

        default:
          break;
      }

      setConvertedValue(convertedValueResult);
    }
  };

  return (
    <Container className="container-fluid app-body card-alignment">
      <Card className="card-background p-5 w-75">
        <Row>
          <h3>Time Conversion</h3>
          <Row>
            <Col>
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
            <Col>
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
                  {timeUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col>
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
                  {timeUnits.map((unit) => (
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

export default TimeConverter;
