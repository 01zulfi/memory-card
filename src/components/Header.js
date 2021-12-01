import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Balls: A Memory Card Game</h1>
      <p>Click a ball to get a point (but don't click a ball twice!)</p>
    </div>
  );
};

export default Header;
