import React from "react";

import WhereLogo from "../../assets/img/where-is-it-page-header.png"
import Location from "../../assets/img/PlaceholderEmmet.png"


export const Event = () => {
  return (
    <div style={{ flex: 1, textAlign: "center", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#000000", fontSize: 30  }}> 
        <img src={WhereLogo} alt="Error"/>Hvor foregår racet?
      </p>
      <div>
        <img src={Location} alt="Error" style={{ overflow: "scroll", width: "70%", border: "2px solid black"}}/>
        <p><br/>
          Vore ænder skal tilbageligge den krævende
          strækning fra Vester Alle til Immervad.
        </p>
        <p>
          Alt efter omstændighederne tager det
          ænderne ca 45 minutter at tilbagelægge
          strækningen. Her tages dog forbehold for
          strøm, vind, drone, tang og
          andre vanskeligheder.
        </p>
        <p>
          Samtidigt med dette vil der i Mølleparken
          være en scene med live musik
          og andre former for underholdning.
          Så Rab Rab afsted!
        </p>
        </div>
    </div>
  )
};
