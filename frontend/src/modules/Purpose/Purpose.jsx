import React from "react";

// Import af billeder
import FlagLogo from "../../assets/img/page-header-duck.png";

export const Purpose = () => {
  return(
    <div style={{ textAlign: "center", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <p style={{ marginTop: 10, color: "#2B2E34", fontSize: 26 }}>
        <img src={FlagLogo} alt="Error"/> Hvad Er Aarhus Duck Race?
      </p>
      <div style={{ fontSize: 16}}>
        <p>
          Udviklings hæmmede børn har svært ved attage til koncerter.
			  </p>
        <p>
          Derfor vil vi gerne bringe musik og underholdning ud på bosteder for udviklings hæmmede børn bor.
			  </p>
        <p>
          Overskuddet at Aarhus duckrace går ubeskåret til dette
			  </p>
        <p>
          Al arbejde i forbindelse med Aarhus duck race er frivillige og ulønnede.
			  </p>
        <p>
          Samtidigt med dette vil vi, udviklings hæmmede gerne holde en fest for jer. Som via jeres skat hverdag hjælper os.
        </p>
        <p style={{fontSize: 20}}>
          Tak for det!
        </p>
      </div>
    </div>
  )
};
