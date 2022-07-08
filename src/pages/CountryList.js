import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CountryCard from "../components/CountryCard/CountryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/action/countryAction";
import { getCountries } from "../services/countryService";


function CountryList() {
  const [country, setCountry] = useState("");
  const [searchedCountryList, setSearchedCountryList] = useState([]);

  const { countryList } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  //Api calling
  useEffect(() => {
    if (countryList.length == 0) {
      getCountries(dispatch, setCountries);
    } else {
      setSearchedCountryList(countryList);
    }
  }, [countryList]);

  useEffect(() => {
    if (countryList.length > 0) {
      var cl = countryList.filter((ctr, index) => {
        var re = new RegExp(`^.*${country}.*$`, "i");
        const match = ctr.name.common.match(re);

        var countryName = match ? match[0] : "";
        console.log({ countryName }, ctr.name.common);
        console.log(countryName == ctr.name.common);

        if (countryName == ctr.name.common) {
          console.log(countryList[index]);
          return countryList[index];
        }
      });
      setSearchedCountryList(cl);
    }
  }, [country]);

  return (
    <div>
      <Header />

      <h1 className="heading">Search for a Country </h1>
      <input
        className="input-feild"
        type="text"
        placeholder="Enter country name"
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      ></input>

      <Container className="card-container">
        <Row md={4}>
          {searchedCountryList &&
            searchedCountryList.map((e, index) => {
              return (
                <Col key={index}>
                  <CountryCard data={e} />
                </Col>
              );
            })}
        </Row>
      </Container>

      <div className="country-list-container"></div>
    </div>
  );
}

export default CountryList;
