import React from "react";

const Script = () => {
  function apple() {
    alert("Hello Mehul");
  }
  return (
    <div>
      <h1>Script rendered</h1>
      <button onClick={apple}>hello</button>
      <p>Hy There</p>
    </div>
  );
};
export default Script;
