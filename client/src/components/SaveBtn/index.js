import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button
      className="save-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      <i className="icon-save"></i>
    </button>
  );
}

export default SaveBtn;
