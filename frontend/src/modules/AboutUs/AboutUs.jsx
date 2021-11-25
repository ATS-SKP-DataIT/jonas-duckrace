import React from "react";

// Import af billeder
import FlagLogo from "../../assets/img/page-header-duck.png";

export const AboutUs = () => {
  return (
    <div style={{ textAlign:"center", alignItems: "center", justifyContent: "center"}}>
      <p style={{ marginTop: 5, color: "#2B2E34", fontSize: 25 }}>
        <img src={FlagLogo} alt="Error"/> Om os
      </p>
      <div style={{ fontSize: 16 }}>
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
