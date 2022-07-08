import React from "react";
import Header from "../components/Header/Header";
import CountryCard from "../components/CountryCard/CountryCard";

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
    </div>
  );
}

export default CountryList;
