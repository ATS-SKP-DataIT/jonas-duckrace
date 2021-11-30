import React from "react";

// Import af billede til and
import TextLogo from "../../assets/img/stor-and.png";

export const Buy = () => {
  return (
    <div style={{margin: "5%"}}>
      <p style={{ textAlign: "center", marginTop: 10, color: "#2B2E34", fontSize: 25, fontFamily: "Roboto"  }}> 
         Køb din and her!
      </p>
      <img src={TextLogo} alt="Error" style={{width: "50%", float: "left"}}/>
      <form>
        <input style={{ width: "40%", height: "8vh", borderRadius: 10, textAlign: "center", float: "right", marginTop: "30%"}} placeholder="Antal"></input>
        <input style={{ borderRadius: 10, textAlign: "center",  height: "6vh", width: "100%", marginTop: 60}} placeholder="Skriv telefon nr."></input>
        <button style={{ borderRadius: 10, textAlign: "center",  height: "6vh", width: "100%", marginTop: 30}}> Betal med MobilePay</button>
      </form>
    </div>
  )
};
