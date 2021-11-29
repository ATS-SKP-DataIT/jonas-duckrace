import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NotFound } from "./NotFound";
import { Layout } from "./Layout/Layout";

import { Home } from "./modules/Home/Home"
import { Concept } from './modules/Concept/Concept'
import { Buy } from './modules/Buy/Buy'
import { Event } from './modules/Event/Event'
import { Prizes } from './modules/Prizes/Prizes'
import { Purpose } from "./modules/Purpose/Purpose"
import { AboutUs } from "./modules/AboutUs/AboutUs"
import { Donate } from "./modules/Donate/Donate"


function App() {
    return ( 
	<BrowserRouter basename={"./skp-projekt-aarhus-duck-race/"}>
      <Layout>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/concept" exact={true} component={Concept} />
          <Route path="/buy" exact={true} component={Buy} />
          <Route path="/event" exact={true} component={Event} />
          <Route path="/prizes" exact={true} component={Prizes} />
          <Route path="/purpose" exact={true} component={Purpose} />
          <Route path="/AboutUs" exact={true} component={AboutUs} />
          <Route path="/Donate" exact={true} component={Donate} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    );
}

export default App;