import axios from "axios";

const BASE_URL = "https://ide-beddbadbbbedebdabfcabcbacaaef.project.examly.io/proxy/8080/";

const fetchLengthUnits = () => {
  return axios.get(`${BASE_URL}/lengthUnits`)
    .then(response => response.data)
    .catch(error => {
      console.error("Error", error);
    });
};

const fetchWeightUnits = () => {
    return axios.get(`${BASE_URL}/weightUnits`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error", error);
      });
  };

  const fetchTemperatureUnits = () => {
    return axios.get(`${BASE_URL}/temperatureUnits`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error", error);
      });
  };
  const fetchSpeedUnits = () => {
    return axios.get(`${BASE_URL}/speedUnits`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error", error);
      });
    };
    const fetchTimeUnits = () => {
      return axios.get(`${BASE_URL}/timeUnits`)
        .then(response => response.data)
        .catch(error => {
          console.error("Error", error);
        });
      };

export {fetchLengthUnits, fetchWeightUnits,fetchTemperatureUnits,fetchSpeedUnits,fetchTimeUnits};
