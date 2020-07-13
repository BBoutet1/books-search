import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <button
      className="btn btn-outline-dark float-right"
      {...props}
      tabIndex="0"
    >
      <i className="icon-save"></i>
    </button>
  );
}

export default SaveBtn;
