import React from "react";
import ReactDom from "react-dom";
import ParticleTextEffect from "./particle-text-effect";
import "./index.css";

ReactDom.render(
  <div>
    <ParticleTextEffect text="Hearts" type="hearts" />
    <ParticleTextEffect text="BEAM" type="sunbeams" />
    <ParticleTextEffect text="LINES" type="lines" />
    <ParticleTextEffect text="BUBBLES" type="bubbles" />
    <ParticleTextEffect text="CONFETTI" type="confetti" />
    <ParticleTextEffect text="FIRE" type="fire" />
  </div>,
  document.getElementById("app")
);
