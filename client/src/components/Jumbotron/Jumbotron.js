import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 60, textAlign: "center", marginTop:15 }}
      className="jumbotron"
    >
      <h1>(React) Google Books Search</h1>
      <h4>Search and Save Books of Interest</h4>
    </div>
  );
}

export default Jumbotron;
