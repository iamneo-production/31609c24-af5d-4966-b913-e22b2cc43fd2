import { useState, useEffect } from "react";
import { fetchLengthUnits, fetchWeightUnits } from "../../../api/Api";
import "./LengthConverter.css";

const LengthConverter = () => {
  const [lengthUnits, setLengthUnits] = useState([]);
  const [weightUnits, setWeightUnits] = useState([]);

  useEffect(() => {
    fetchLengthUnits()
      .then(data => {
        setLengthUnits(data);
      })
      .catch(error => {
      });


      fetchWeightUnits()
      .then(data => {
        setWeightUnits(data);
      })
      .catch(error => {
      });
  }, []);

  return (
    <div className="app-body">
      <h1>Convert into Length Units</h1>
      <p>{lengthUnits}</p>
      {weightUnits}
    </div>
  );
};

export default LengthConverter;
