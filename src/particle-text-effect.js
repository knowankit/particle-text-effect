import React, { useEffect } from "react";

const ParticleTextEffect = ({ text, type, className }) => {
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

  const bubbleHTMLType = () => {
    return (
      <>
        <div className="textcontainer">
          <span className="particletext bubbles">{text}</span>
        </div>
        <style jsx="true">
          {`
            .particletext.bubbles > .particle {
              opacity: 0;
              position: absolute;
              background-color: rgba(33, 150, 243, 0.5);
              animation: bubbles 3s ease-in infinite;
              border-radius: 100%;
            }

            @keyframes bubbles {
              0% {
                opacity: 0;
              }
              20% {
                opacity: 1;
                transform: translate(0, -20%);
              }
              100% {
                opacity: 0;
                transform: translate(0, -1000%);
              }
            }
          `}
        </style>
      </>
    );
  };

  const heartsHTMLType = () => {
    return (
      <>
        <div className="textcontainer">
          <span className="particletext hearts">{text}</span>
        </div>
        <style jsx="true">
          {`
            .particletext.hearts > .particle {
              opacity: 0;
              position: absolute;
              background-color: rgba(204, 42, 93, 1);
              animation: hearts 3s ease-in infinite;
            }

            .particletext.hearts > .particle:before,
            .particletext.hearts > .particle:after {
              position: absolute;
              content: "";
              border-radius: 100px;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              background-color: rgba(204, 42, 93, 1);
            }

            .particletext.hearts > .particle:before {
              transform: translateX(-50%);
            }

            .particletext.hearts > .particle:after {
              transform: translateY(-50%);
            }

            @keyframes hearts {
              0% {
                opacity: 0;
                transform: translate(0, 0%) rotate(45deg);
              }
              20% {
                opacity: 0.8;
                transform: translate(0, -20%) rotate(45deg);
              }
              100% {
                opacity: 0;
                transform: translate(0, -1000%) rotate(45deg);
              }
            }
          `}
        </style>
      </>
    );
  };

  const getLinesHTMLType = () => {
    return (
      <>
        <div className="textcontainer">
          <span className="particletext lines">{text}</span>
        </div>
        <style jsx="true">
          {`
            .particletext.lines > .particle {
              position: absolute;
              background-color: rgba(244, 67, 54, 0.5);
              animation: lines 3s linear infinite;
            }

            @keyframes lines {
              0%,
              50%,
              100% {
                transform: translateY(0%);
              }
              25% {
                transform: translateY(100%);
              }
              75% {
                transform: translateY(-100%);
              }
            }
          `}
        </style>
      </>
    );
  };

  const getConfettiHTMLType = () => {
    return (
      <>
        <div className="textcontainer">
          <span className="particletext confetti">{text}</span>
        </div>
        <style jsx="true">
          {`
            .particletext.confetti > .particle {
              opacity: 0;
              position: absolute;
              animation: confetti 3s ease-in infinite;
            }

            .particletext.confetti > .particle.c1 {
              background-color: rgba(76, 175, 80, 0.5);
            }

            .particletext.confetti > .particle.c2 {
              background-color: rgba(156, 39, 176, 0.5);
            }

            @keyframes confetti {
              0% {
                opacity: 0;
                transform: translateY(0%) rotate(0deg);
              }
              10% {
                opacity: 1;
              }
              35% {
                transform: translateY(-800%) rotate(270deg);
              }
              80% {
                opacity: 1;
              }
              100% {
                opacity: 0;
                transform: translateY(2000%) rotate(1440deg);
              }
            }
          `}
        </style>
      </>
    );
  };

  const getFireHTMLType = () => {
    return (
      <>
        <div className="textcontainer">
          <span className="particletext fire">{text}</span>
        </div>
        <style jsx="true">
          {`
            .particletext.fire > .particle {
              position: absolute;
              background-color: rgba(255, 193, 7, 0.5);
              border-radius: 40px;
              border-top-right-radius: 0px;
              animation: fires 0.8s linear infinite;
              transform: rotate(-45deg);
              opacity: 0;
            }

            .particletext.fire > .particle:before {
              position: absolute;
              content: "";
              top: 60%;
              left: 40%;
              transform: translate(-50%, -50%);
              width: 50%;
              height: 50%;
              border-radius: 40px;
              border-top-right-radius: 0px;
              background-color: rgba(251, 140, 0, 0.5);
            }

            @keyframes fires {
              0% {
                transform: rotate(-70deg) translateY(0%);
              }
              25% {
                transform: rotate(-20deg) translateY(-5%);
                opacity: 1;
              }
              50% {
                transform: rotate(-70deg) translateY(-10%);
              }
              75% {
                transform: rotate(-20deg) translateY(-20%);
              }
              100% {
                transform: rotate(-70deg) translateY(-40%);
                opacity: 1;
              }
            }
          `}
        </style>
      </>
    );
  };

  const getSunBeamHTMLType = () => {
    return (
      <>
        <div className="textcontainer">
          <span className="particletext sunbeams">{text}</span>
        </div>
        <style jsx="true">
          {`
            .particletext.sunbeams > .particle {
              position: absolute;
              background-color: rgba(253, 216, 53, 0.5);
              animation: sunbeams 3s linear infinite;
            }

            @keyframes sunbeams {
              0% {
                transform: translateY(40%) rotate(0deg);
              }
              50% {
                transform: translateY(-40%) rotate(180deg);
              }
              100% {
                transform: translateY(40%) rotate(360deg);
              }
              0%,
              14%,
              17%,
              43%,
              53%,
              71%,
              80%,
              94%,
              100% {
                opacity: 0;
              }
              6%,
              15%,
              24%,
              28%,
              48%,
              55%,
              78%,
              82%,
              99% {
                opacity: 1;
              }
            }
          `}
        </style>
      </>
    );
  };

  const getEffectType = () => {
    switch (type) {
      case "bubbles":
        return bubbleHTMLType();

      case "hearts":
        return heartsHTMLType();

      case "lines":
        return getLinesHTMLType();

      case "confetti":
        return getConfettiHTMLType();

      case "fire":
        return getFireHTMLType();

      case "sunbeams":
        return getSunBeamHTMLType();

      default:
        return (
          <div className="textcontainer">
            <span className={`particletext ${type}`}>{text}</span>
          </div>
        );
    }
  };

  return (
    <>
      {getEffectType(type)}
      <style jsx="true">
        {`
          .textcontainer {
            text-align: center;
            font-family: inherit;
            font-size: inherit;
          }

          .particletext {
            text-align: center;
            font-size: inherit;
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default ParticleTextEffect;
