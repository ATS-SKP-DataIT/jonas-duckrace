import React from "react";

import Sponser from "./SponsorData.json";
import Carousel from 'react-bootstrap/Carousel'

export const Sponsors = () => {
  return (
    <Carousel variant="dark"
    controls={false}
    indicators={true}
    >

    {Sponser.map(Sponsor => {
      return(
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={Sponsor.Image}
              alt={Sponsor.id}
           />
           <Carousel.Caption>
             <h5>{Sponsor.SponsorNavn}</h5>
             <p>{Sponsor.Info}</p>
           </Carousel.Caption>
        </Carousel.Item>
      )
    })}
    </Carousel>
  )
};
