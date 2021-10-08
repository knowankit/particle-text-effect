import React, { useEffect } from "react";
import $ from "jquery";
import "./index.css";

const ExampleComponent = ({ text }) => {
  useEffect(() => {
    initparticles();
  }, []);

  const initparticles = () => {
    bubbles();
    hearts();
    lines();
    confetti();
    fire();
    sunbeams();
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
    $.each($(".particletext.hearts"), function() {
      var heartcount = ($(this).width() / 50) * 5;
      for (var i = 0; i <= heartcount; i++) {
        var size = rnd(60, 120) / 10;
        $(this).append(
          '<span class="particle" style="top:' +
            rnd(20, 80) +
            "%; left:" +
            rnd(0, 95) +
            "%;width:" +
            size +
            "px; height:" +
            size +
            "px;animation-delay: " +
            rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  };

  const lines = () => {
    $.each($(".particletext.lines"), function() {
      var linecount = ($(this).width() / 50) * 10;
      for (var i = 0; i <= linecount; i++) {
        $(this).append(
          '<span class="particle" style="top:' +
            rnd(-30, 30) +
            "%; left:" +
            rnd(-10, 110) +
            "%;width:" +
            rnd(1, 3) +
            "px; height:" +
            rnd(20, 80) +
            "%;animation-delay: -" +
            rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  };

  const confetti = () => {
    $.each($(".particletext.confetti"), function() {
      var confetticount = ($(this).width() / 50) * 10;
      for (var i = 0; i <= confetticount; i++) {
        $(this).append(
          '<span class="particle c' +
            rnd(1, 2) +
            '" style="top:' +
            rnd(10, 50) +
            "%; left:" +
            rnd(0, 100) +
            "%;width:" +
            rnd(6, 8) +
            "px; height:" +
            rnd(3, 4) +
            "px;animation-delay: " +
            rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  };

  const fire = () => {
    $.each($(".particletext.fire"), function() {
      var firecount = ($(this).width() / 50) * 20;
      for (var i = 0; i <= firecount; i++) {
        var size = rnd(8, 12);
        $(this).append(
          '<span class="particle" style="top:' +
            rnd(40, 70) +
            "%; left:" +
            rnd(-10, 100) +
            "%;width:" +
            size +
            "px; height:" +
            size +
            "px;animation-delay: " +
            rnd(0, 20) / 10 +
            's;"></span>'
        );
      }
    });
  };

  const sunbeams = () => {
    $.each($(".particletext.sunbeams"), function() {
      var linecount = ($(this).width() / 50) * 10;
      for (var i = 0; i <= linecount; i++) {
        $(this).append(
          '<span class="particle" style="top:' +
            rnd(-50, 0) +
            "%; left:" +
            rnd(0, 100) +
            "%;width:" +
            rnd(1, 3) +
            "px; height:" +
            rnd(80, 160) +
            "%;animation-delay: -" +
            rnd(0, 30) / 10 +
            's;"></span>'
        );
      }
    });
  };

  return (
    <>
      <div className="textcontainer">
        <span className="particletext bubbles">BUBBLES</span>
      </div>

      <div className="textcontainer">
        <span className="particletext confetti">CONFETTI</span>
      </div>

      <div className="textcontainer">
        <span className="particletext hearts">HEARTS</span>
      </div>

      <div className="textcontainer">
        <span className="particletext fire">FIRE</span>
      </div>

      <div className="textcontainer">
        <span className="particletext lines">LINES</span>
      </div>
    </>
  );
};

export default ExampleComponent;
