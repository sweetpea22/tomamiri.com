import React from 'react'
import { Switch, Route } from "@chainsafe/common-components"
import HomePage from "./Pages/HomePage";

export const ROUTE_LINKS = {
  Home: "/",
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_LINKS.Home} component={HomePage} />
    </Switch>
  )
}

export default Routes