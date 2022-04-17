import React from "react";

function Dummypage(props) {
  return (
    <div style={props.style}>
      <p>{props.text}</p>
    </div>
  );
}

export default Dummypage;
