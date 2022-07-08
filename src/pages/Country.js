import React from "react";
import Header from "../components/Header/Header";

export default function Country() {
  return (
    <div>
      <Header />
      <input
        className="input-feild"
        type="text"
        placeholder="Enter country name"
      ></input>

      <h1 className="heading">Sri Lanka</h1>
    </div>
  );
}
