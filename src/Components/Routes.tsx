import React from 'react'
import { Switch, Route } from "@chainsafe/common-components"
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PostersPage from "./Pages/PostersPage";
import KemistryPage from "./Pages/KemistryPage";
import MetaPage from "./Pages/MetaPage";
import CriterionPage from "./Pages/CriterionPage";
import CadenciaPage from "./Pages/CadenciaPage";
import PaladinPage from "./Pages/PaladinPage";

export const ROUTE_LINKS = {
  Home: "/",
  About: "/about",
  Meta: "/meta-alert",
  Kemistry: "/kemistry",
  Criterion: "/criterion-redesign",
  Cadencia: "/cadencia",
  Posters: "/posters",
  Paladin: "/paladin"

}

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_LINKS.Home} component={HomePage} />
      <Route exact path={ROUTE_LINKS.About} component={AboutPage} />
      <Route exact path={ROUTE_LINKS.Meta} component={MetaPage} />
      <Route exact path={ROUTE_LINKS.Kemistry} component={KemistryPage} />
      <Route exact path={ROUTE_LINKS.Criterion} component={CriterionPage} />
      <Route exact path={ROUTE_LINKS.Cadencia} component={CadenciaPage} />
      <Route exact path={ROUTE_LINKS.Posters} component={PostersPage} />
      <Route exact path={ROUTE_LINKS.Paladin} component={PaladinPage} />
    </Switch>
  )
}

export default Routes