import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CountryCard from "../components/CountryCard/CountryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

function CountryList() {
  const [countryList, setCountryList] = useState([]);

  const [country, setCountry] = useState("");

  async function getCountries() {
    await axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        console.log(res.data);
        setCountryList(res.data);
      });
  }
  //Api calling
  useEffect(() => {
    getCountries();
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
          {countryList.map((e, index) => {
            return (
              <Col key = {index}>
                <CountryCard data={e} />
              </Col>
            );
          })}
          {/* <Col xs={6}>
            <CountryCard />
          </Col>
          <Col>
            <CountryCard />
          </Col>
          <Col>
            <CountryCard />
          </Col> */}
        </Row>
      </Container>

      {/* <Container className="card-container">
        <Row md={4}>
          <Col>
            <CountryCard />
          </Col>
          <Col xs={6}>
            <CountryCard />
          </Col>
          <Col>
            <CountryCard />
          </Col>
          <Col>
            <CountryCard />
          </Col>
        </Row>
      </Container>

      <Container className="card-container">
        <Row md={4}>
          <Col>
            <CountryCard />
          </Col>
          <Col xs={6}>
            <CountryCard />
          </Col>
          <Col>
            <CountryCard />
          </Col>
          <Col>
            <CountryCard />
          </Col>
        </Row>
      </Container> */}

      <div className="country-list-container"></div>
    </div>
  );
}

export default CountryList;
