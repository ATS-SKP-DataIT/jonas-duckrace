import React, { useState } from "react";
import "./Home.style.css";
import { LoadingSplash } from "../LoadingSplash/LoadingSplash";

import { Calendar } from "./Calendar";

export const Home = () => {

  return (
    <>
     <div className="splash">
      <LoadingSplash id="hideMe"/>
      </div>
      <div className="homePage">
      <h1 className="title font-weight-bold text-center">Aarhus duck race</h1>
      <div className="video"></div>
      <div className="d-flex">
        <Calendar />
      </div>
      </div>
    </>
  );
};
