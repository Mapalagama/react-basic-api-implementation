import React from "react";
import "../CountryCard/countryCard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CountryCard({ data }) {
  console.log(data);
  return (
    <div>
      <div className="card-box">
        <div className="card-header">
          {data?.name?.common}
          <br />
          <span className="country-local-name">
           
          </span>
        </div>
        <ul className="list-group list-group-flush">
      
          <li className="list-group-item">
            <Row>
              <Col lg={10}>Country Code (Alpha 2) </Col>
              <Col lg={2}>
                <span className="lead">{data.cca2}</span>
              </Col>
            </Row>
          </li>
          <li className="list-group-item">
            <Row>
              <Col lg={10}>Country Code (Alpha 3) </Col>
              <Col lg={2}>
                <span className="lead">{data.cca3}</span>
              </Col>
            </Row>
          </li>
          <li className="list-group-item">
            <Row>
              <Col lg={4}>Currency</Col>
              <Col className="d-flex justify-content-end" lg={8}>
                <span className="lead">{data?.currencies?.LKR?.name}</span>
              </Col>
            </Row>
          </li>
          <li className="list-group-item">
            <Row>
              <Col lg={10}>Initial dial code</Col>
              <Col lg={2}>
                <span className="lead">
                  {data?.idd?.root}
                  {data?.idd?.suffixes}
                </span>
              </Col>
            </Row>
          </li>
          <li className="list-group-item">
            <Row>
              <Col lg={4}>Languages</Col>
              <Col className="d-flex justify-content-end" lg={8}>
                <span className="lead">
                  {
                    Object.keys(data?.languages).map((e,index)=>{
                      return <p key={index}>
                        {
                          data.languages[e]
                        }
                      </p>
                    })
                  }
                </span>
              </Col>
            </Row>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
