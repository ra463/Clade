import React from "react";
import "./Header.scss";
import Rectangle from "../../assets/svg/Rectangle.svg";
import ArrowDown from "../../assets/svg/chevron-down.svg";
import BriefCase from "../../assets/svg/briefcase.svg";
import Message from "../../assets/svg/message.svg";
import Coin from "../../assets/svg/coins-hand.svg";
import Bell from "../../assets/svg/bell.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="links">
        <li className="active">
          <img src={BriefCase} alt="BriefCase" />
          Jobs
        </li>
        <li>
          <span className="dot">
            <img src={Message} alt="Message" />
            <span></span>
          </span>
          Messages
        </li>
        <li>
          <img src={Coin} alt="Coin" />
          Payments
        </li>
      </div>
      <div className="right">
        <span className="dot">
          <img src={Bell} alt="Bell" />
          <span className="dot_bell"></span>
        </span>
        <div className="drop-down">
          <img src={Rectangle} alt="Rectangle" />
          <img src={ArrowDown} alt="ArrowDown" />
        </div>
      </div>
    </div>
  );
};

export default Header;
