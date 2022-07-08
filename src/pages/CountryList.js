import React from "react";
import Header from "../components/Header/Header";
import CountryCard from "../components/CountryCard/CountryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CountryList() {
  return (
    <div>
      <Header />

      <h1 className="heading">Search for a Country</h1>
      <input
        className="input-feild"
        type="text"
        placeholder="Enter country name"
      ></input>

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
      </Container>

      <div className="country-list-container"></div>
    </div>
  );
}

export default CountryList;
