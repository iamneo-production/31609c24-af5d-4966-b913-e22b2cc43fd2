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

import { fetchSpeedUnits } from "../../../api/Api";

const SpeedConverter = () => {
  const [speedUnits, setSpeedUnits] = useState([]);

  const [value, setValue] = useState();

  const [convertedValue, setConvertedValue] = useState();

  const [sourceUnit, setSourceUnit] = useState();

  const [targetUnit, setTargetUnit] = useState();

  useEffect(() => {
    fetchSpeedUnits()
      .then((data) => {
        setSpeedUnits(data);
      })

      .catch((error) => {});
  }, []);

  useEffect(() => {
    setConvertedValue();
  }, [value]);

  const convertUnits = () => {
    if (value && sourceUnit && targetUnit) {
      let convertedValueMeterPerSecond = value;

      switch (sourceUnit) {
        case "miles_per_hour":
          convertedValueMeterPerSecond = value * 0.44704;

          break;

        case "kilometers_per_hour":
          convertedValueMeterPerSecond = value * 0.277778;

          break;

        case "meters_per_second":
          convertedValueMeterPerSecond = value;

          break;

        default:
          break;
      }
      let convertedValueResult = convertedValueMeterPerSecond;
      switch(targetUnit){
        case "miles_per_hour":
          convertedValueResult *= 2.23694;

          break;

        case "kilometers_per_hour":
          convertedValueResult *= 3.6;

          break;

        case "meters_per_second":
          convertedValueResult *= 1;

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
          <h3>Speed Conversion</h3>

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
                      setConvertedValue();
                    }
                  }}
                >
                  <option value="">Select</option>

                  {speedUnits.map((unit) => (
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
                      setConvertedValue();
                    }
                  }}
                >
                  <option value="">Select</option>

                  {speedUnits.map((unit) => (
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

export default SpeedConverter;
