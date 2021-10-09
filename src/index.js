import React from "react";
import ReactDom from "react-dom";
import ParticleTextEffect from "./particle-text-effect";

ReactDom.render(
  <ParticleTextEffect text="Hello World!" type="hearts" />,
  document.getElementById("app")
);
