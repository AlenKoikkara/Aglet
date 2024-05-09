import React, { useState } from "react";
import "./HamburgerMenu.scss";
const HamburgerMenu = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const element = document.getElementById('hamburger');
    if (clicked === true) {
      element.classList.remove('open');
      element.classList.add('closed');
      setClicked(false);
    } else {
      element.classList.remove('closed');
      element.classList.add('open');
      setClicked(true);
    }
  }

  return (
    <div onClick={() => handleClick()} id="hamburger" class="hamburger closed">
      <div class="burger-main">
        <div class="burger-inner">
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bot"></span>
        </div>
      </div>

      <div class="svg-main">
        <svg class="svg-circle">
          <path
            class="path"
            fill="none"
            stroke="#111"
            stroke-miterlimit="10"
            stroke-width="3"
            d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"
          />
        </svg>
      </div>
      <div class="path-burger">
        <div class="animate-path">
          <div class="path-rotation"></div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
