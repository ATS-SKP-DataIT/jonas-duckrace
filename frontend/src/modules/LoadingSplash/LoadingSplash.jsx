import React from "react";
import "./style.css";
import Title from "../../assets/img/splash-logo.png"
import Logo from "../../assets/img/aarhustech-logo.png"

export const LoadingSplash = () => {
  
  return (
    <div className="splashBody">
        <div className="Image">
            <img alt="Not loaded" src={Title} />
        </div>
        <p className="credit">Made by AARHUS TECH <img className="ATLogo" alt="Not loaded" src={Logo} /></p>
    </div>
  )
};
