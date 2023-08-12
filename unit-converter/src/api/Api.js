import axios from "axios";

const BASE_URL = "https://ide-dedcfacedbbbedebdabfcabcbacaaef.project.examly.io/proxy/8080/";

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

export {fetchLengthUnits, fetchWeightUnits};
