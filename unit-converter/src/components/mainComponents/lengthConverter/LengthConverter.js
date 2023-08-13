
import { useState, useEffect } from "react";

import { Row, Col, FormGroup, Label, Input, Button,Card,Container} from "reactstrap";

import { fetchLengthUnits } from "../../../api/Api";

import "./LengthConverter.css";




const LengthConverter = () => {




  const [lengthUnits, setLengthUnits] = useState([]);

  const [value, setValue] = useState();

  const [convertedValue, SetConvertedValue] = useState();

  const [sourceUnit, setSourceUnit] = useState();

  const [targetUnit, setTargetUnit] = useState();




  const fetchData = async () => {

    try {

      const data = await fetchLengthUnits();

      setLengthUnits(data);

    } catch (error) {

      // Handle error here if needed

    }

  };




  useEffect(() => {

    fetchData();

  }, []);




  useEffect(() => {

    SetConvertedValue();

  }, [value]);




  const convertUnits = () => {

    if (value && sourceUnit && targetUnit) {

      let convertedValueInMeter = value;




      switch (sourceUnit) {

        case "millimeter":

          convertedValueInMeter *= 0.001;

          break;

        case "centimeter":

          convertedValueInMeter *= 0.01;

          break;

        case "kilometer":

          convertedValueInMeter *= 1000;

          break;

        case "inch":

          convertedValueInMeter *= 0.0254;

          break;

        case "foot":

          convertedValueInMeter *= 0.3048;

          break;

        case "yard":

          convertedValueInMeter *= 0.9144;

          break;

        case "mile":

          convertedValueInMeter *= 1609.34;

          break;

        default:

          break;

      }




      let convertedValueInTargetUnit = convertedValueInMeter;




      switch (targetUnit) {

        case "millimeter":

          convertedValueInTargetUnit /= 0.001;

          break;

        case "centimeter":

          convertedValueInTargetUnit /= 0.01;

          break;

        case "kilometer":

          convertedValueInTargetUnit /= 1000;

          break;

        case "inch":

          convertedValueInTargetUnit /= 0.0254;

          break;

        case "foot":

          convertedValueInTargetUnit /= 0.3048;

          break;

        case "yard":

          convertedValueInTargetUnit /= 0.9144;

          break;

        case "mile":

          convertedValueInTargetUnit /= 1609.34;

          break;

        default:

          break;

      }




      SetConvertedValue(convertedValueInTargetUnit);

    }

  };




  return (

    <Container className="d-flex justify-content-center align-items-center min-vh-100">




    <Card className="centre-card" style={ {background: 'radial-gradient(circle,rgba(238, 174, 202, 1) 0%,rgba(148, 187, 233, 1) 100%)'}}>




    <Row className="container-fluid app-body">

      <h3>Length Conversion</h3>

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

                  SetConvertedValue();

                } else {

                  setSourceUnit(selectedValue);

                }

              }}

            >

               <option value="">Select</option>

              {lengthUnits.map((unit) => (

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

              {lengthUnits.map((unit) => (

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




export default LengthConverter;


