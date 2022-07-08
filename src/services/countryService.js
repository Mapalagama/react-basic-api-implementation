import axios from "axios";
export const getCountries = async (dispatch, setCountries) => {
  await axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
    dispatch(setCountries(res.data));
  });
};
