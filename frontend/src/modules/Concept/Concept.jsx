import React from "react";

// Import af billeder
import FlagLogo from "../../assets/img/page-header-duck.png";

// Import af Text Fonts
import Acme from "../../assets/fonts/Acme/._Acme-Regular.ttf";
import Mplus from "../../assets/fonts/M_PLUS_Rounded_1c/._MPLUSRounded1c-Regular.ttf";

export const Concept = () => {
  return(
    <div style={{ fontFamily: {Acme}, textAlign: "center", flex: 1, alignItems: "center", justifyContent: "center" }}>
            <p style={{  color: "#2B2E34", fontSize: 25 }}>
                <img src={FlagLogo} alt="Error"/> Hvad Er Aarhus Duck Race?
            </p>
            <div style={{ fontFamily: {Mplus}, fontSize: 16}}>
            <p>
                Aarhus Duckrace er et spændende festligt
                familie arrangement. Hvor 5000 super
                hurtige ænder dyster om at være den
                hurtigste and på åen.
			</p>
            <p>
                Hver and har et nummer, som du kan købe.
                Vinder anden med dit nummer
                er der super fede præmier til dig.
			</p>
            <p>
                Samtidigt med løbet er årets<br/>
                folkefest, med musik dans,
                og andre sjove happenings i Mølleparken. 
			</p>
            <p>
                Der vil være storskærm,
                hvor du via en drone video
                kan følge din and.
                Og være helt tæt på løbet.
			</p>
            <p>
                Vi glæder os til at se dig
                den 1. Maj 2022 i Mølleparken.
            </p>
            </div>
        </div>
  )
};
