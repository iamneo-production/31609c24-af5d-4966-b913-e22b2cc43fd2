import { useState, useEffect } from "react";
import { fetchWeightUnits } from "../../../api/Api";

const WeightConverter = () => {
  const [weightUnits, setWeightUnits] = useState([]);

  useEffect(() => {
      fetchWeightUnits()
      .then(data => {
        setWeightUnits(data);
      })
      .catch(error => {
      });
  }, []);

  return (
    <div className="app-body">
      <h1>Convert into Weight Units</h1>
      {weightUnits}
    </div>
  );
};

export default WeightConverter;
