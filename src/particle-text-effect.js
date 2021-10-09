import React, { useEffect } from "react";
import "./index.css";

const ExampleComponent = ({ text, type, color }) => {
  useEffect(() => {
    initparticles();
  }, []);

  const initparticles = () => {
    switch (type) {
      case "bubbles":
        bubbles();
        break;
      case "hearts":
        hearts();
        break;
      case "lines":
        lines();
        break;
      case "confetti":
        confetti();
        break;
      case "fire":
        fire();
        break;
      case "sunbeams":
        sunbeams();
        break;

      default:
        break;
    }
  };

  const rnd = (m, n) => {
    m = parseInt(m);
    n = parseInt(n);

    return Math.floor(Math.random() * (n - m + 1)) + m;
  };

  const bubbles = () => {
    const element = document.querySelector(".particletext.bubbles");
    const bubblecount = (element.offsetWidth / 50) * 10;

    for (let i = 0; i <= bubblecount; i++) {
      const size = rnd(40, 80) / 10;
      const span = document.createElement("span");
      span.classList.add("particle");

      span.style.top = rnd(20, 80) + "%";
      span.style.left = rnd(0, 95) + "%";
      span.style.width = size + "px";
      span.style.height = size + "px";
      span.style.animationDelay = rnd(0, 30) / 10 + "s";

      element.appendChild(span);
    }
  };

  const hearts = () => {
    const element = document.querySelector(".particletext.hearts");
    const heartcount = (element.offsetWidth / 50) * 5;

    for (let i = 0; i <= heartcount; i++) {
      const size = rnd(60, 120) / 10;
      const span = document.createElement("span");
      span.classList.add("particle");

      span.style.top = rnd(20, 80) + "%";
      span.style.left = rnd(0, 95) + "%";
      span.style.width = size + "px";
      span.style.height = size + "px";
      span.style.animationDelay = rnd(0, 30) / 10 + "s";

      element.appendChild(span);
    }
  };

  const lines = () => {
    const element = document.querySelector(".particletext.lines");

    const linecount = (element.offsetWidth / 50) * 10;

    for (let i = 0; i <= linecount; i++) {
      const span = document.createElement("span");
      span.classList.add("particle");

      span.style.top = rnd(-30, 30) + "%";
      span.style.left = rnd(-10, 110) + "%";
      span.style.width = rnd(1, 3) + "px";
      span.style.height = rnd(20, 80) + "%";
      span.style.animationDelay = "-" + rnd(0, 30) / 10 + "s";

      element.appendChild(span);
    }
  };

  const confetti = () => {
    const element = document.querySelector(".particletext.confetti");
    const confetticount = (element.offsetWidth / 50) * 10;

    for (let i = 0; i <= confetticount; i++) {
      const span = document.createElement("span");
      span.classList.add("particle");
      span.classList.add(`c${rnd(1, 2)}`);

      span.style.top = rnd(10, 50) + "%";
      span.style.left = rnd(0, 100) + "%";
      span.style.width = rnd(6, 8) + "px";
      span.style.height = rnd(3, 4) + "px";
      span.style.animationDelay = rnd(0, 30) / 10 + "s";

      element.appendChild(span);
    }
  };

  const fire = () => {
    const element = document.querySelector(".particletext.fire");
    const firecount = (element.offsetWidth / 50) * 20;

    for (let i = 0; i <= firecount; i++) {
      const size = rnd(8, 12);
      const span = document.createElement("span");
      span.classList.add("particle");

      span.style.top = rnd(40, 70) + "%";
      span.style.left = rnd(-10, 100) + "%";
      span.style.width = size + "px";
      span.style.height = size + "px";
      span.style.animationDelay = rnd(0, 20) / 10 + "s";

      element.appendChild(span);
    }
  };

  const sunbeams = () => {
    const element = document.querySelector(".particletext.sunbeams");
    const linecount = (element.offsetWidth / 50) * 10;

    for (let i = 0; i <= linecount; i++) {
      const span = document.createElement("span");
      span.classList.add("particle");

      span.style.top = rnd(-50, 0) + "%";
      span.style.left = rnd(0, 100) + "%";
      span.style.width = rnd(1, 3) + "px";
      span.style.height = rnd(80, 160) + "%";
      span.style.animationDelay = "-" + rnd(0, 30) / 10 + "s";

      element.appendChild(span);
    }
  };

  const getEffectType = () => {
    return (
      <div className="textcontainer">
        <span className={`particletext ${type}`}>{text}</span>
      </div>
    );
  };

  return getEffectType(type);
};

export default ExampleComponent;
