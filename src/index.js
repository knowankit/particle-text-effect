import React from "react";
import ReactDom from "react-dom";
import ExampleComponent from "./example-component";

ReactDom.render(
  <ExampleComponent text="Hello World!" />,
  document.getElementById("app")
);
