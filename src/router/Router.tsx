import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import routes from "./routes.json"
import Pages from "../page"
import React from "react"

interface Props {}

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => {
          const Component: React.FunctionComponent<any> = Pages[route.component]
          return (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <Component index={1} />
            </Route>
          )
        })}
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
