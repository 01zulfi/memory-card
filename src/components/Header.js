import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Balls: A Memory Card Game</h1>
      <p>Click a ball to get a point (but don't click a ball twice!)</p>
      <p>
        <a
          target="_blank"
          href="https://github.com/xari4808/memory-card/blob/main/ATTRIBUTIONS.md"
          rel="noreferrer"
        >
          Attributions
        </a>
      </p>
    </div>
  );
};

export default Header;
