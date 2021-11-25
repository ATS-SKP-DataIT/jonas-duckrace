import React from "react";

// Import af billeder
import FlagLogo from "../../assets/img/page-header-duck.png";

// Import af Text Fonts
import Acme from "../../assets/fonts/Acme/._Acme-Regular.ttf";
import Mplus from "../../assets/fonts/M_PLUS_Rounded_1c/._MPLUSRounded1c-Regular.ttf";

export const AboutUs = () => {
  return (
    <div style={{ textAlign:"center", alignItems: "center", justifyContent: "center" }}>
      <p style={{ fontFamily: {Acme}, color: "#2B2E34", fontSize: 26 }}>
        <img src={FlagLogo} alt="Error"/> Om os
      </p>
      <div style={{ fontSize: 16, fontFamily: {Mplus} }}>
        <p>
          Foreningen ”Aarhus duck Race” er
          en forening som ene og alene
          på 100 % frivillig basis at afholde
          dette løb og folkefest.
        </p>
        <p>
          Samtidigt med at gøre det.
          Har vi det skide sjovt. 
          Det er jo altid sjovt at
          gøre noget godt for andre.
        </p>
        <p>
          Så har du lyst til at være frivillig.
          Er du meget velkommen til at blive
          medhjælper, og medlem af foreningen.
        </p>
      </div>
    </div>
  )
};
