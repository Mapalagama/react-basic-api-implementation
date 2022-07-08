import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../components/Header/Header";

export default function Country() {
  return (
    <div>
      <div>
        <Header />
        <input
          className="input-feild"
          type="text"
          placeholder="Enter country name"
        ></input>
      </div>

      <Row>
        <h1 className="heading">Sri Lanka</h1>
        <Col>
          <Row className="name-row">
            <h2>Names</h2>
            <table>
              <tr className="table-row">
                <th>Common</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Official</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Common(native)</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Ofiicial(native)</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Alternative spellings</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Translation</th>
                <td className="table-coloum">commonProp</td>
              </tr>
            </table>
          </Row>
          <Row className="name-row">
            <h2>Codes</h2>
            <table className="table-border">
              <tr className="table-row">
                <th>ISO 3166-1 alpha-2</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr>
                <th>ISO 3166-1 alpha-3</th>
                <td className="table-coloum">Democtritc</td>
              </tr>
              <tr className="table-row">
                <th>ISO 3166-1 numeric</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>International calling code</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>ISO 4217 currency code</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Top level domains</th>
                <td className="table-coloum">commonProp</td>
              </tr>
            </table>
          </Row>
        </Col>
        <Col>
          <Row className="name-row">
            <h2>Language</h2>
            <table>
              <tr className="table-row">
                <th>Native language</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Languages</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>sin</th>
              </tr>
              <tr className="table-row">
                <th>tam</th>
                <td className="table-coloum">commonProp</td>
              </tr>
            </table>
          </Row>
          <Row className="name-row">
            <h2>Geography</h2>
            <table>
              <tr className="table-row">
                <th>Region</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Subregion</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Capital</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Demonym</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Lat/Lng</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Area</th>
                <td className="table-coloum">commonProp</td>
              </tr>
              <tr className="table-row">
                <th>Land borders</th>
                <td className="table-coloum">commonProp</td>
              </tr>
            </table>
          </Row>
        </Col>
        <Col>
          <Row>
            <img
              className="country-flag"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/800px-Flag_of_Sri_Lanka.svg.png"
              alt="W3Schools.com"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
