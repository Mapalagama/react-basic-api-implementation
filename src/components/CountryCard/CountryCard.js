import React from "react";
import "../CountryCard/countryCard.css";

function CountryCard() {
  return (
    <div>
      <div className="card-box">
        <div className="card-header">
          Country Name
          <br />
          <span className="country-local-name">(text)</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Country Code (Alpha 2) <span className="country-card-prop"> code2</span></li>
          <li className="list-group-item">Country Code (Aplha 3)<span className="country-card-prop">code3</span></li>
          <li className="list-group-item">Currency<span className="country-card-prop">Currency</span></li>
          <li className="list-group-item">Int. dial code<span className="country-card-prop">dial code</span></li>
          <li className="list-group-item">Language <span className="country-card-prop">langu</span></li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
