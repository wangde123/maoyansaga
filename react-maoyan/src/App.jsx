import React, { lazy, Suspense } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Index"));
const Detail = lazy(() => import("./pages/detail/Index"));
const City = lazy(() => import("./pages/city/Index"));
const NotFound = lazy(() => import("./pages/notfound/Index"));

const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/detail">
          <Detail></Detail>
        </Route>
        <Route path="/city">
          <City></City>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
