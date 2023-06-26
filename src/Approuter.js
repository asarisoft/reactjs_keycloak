import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import { useKeycloak } from "@react-keycloak/web";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { keycloak } = useKeycloak();
  return (
    <Route
      {...rest}
      render={(props) =>
        keycloak.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth" />
        )
      }
    />
  );
}


function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth" component={LoginPage} />
        <PrivateRoute path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;