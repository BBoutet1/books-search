import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button
      className="btn btn-outline-danger float-right"
      {...props}
      tabIndex="0"
    >
      <i className="icon-remove" style={{fontSize:25}}></i>
    </button>
  );
}

export default DeleteBtn;
